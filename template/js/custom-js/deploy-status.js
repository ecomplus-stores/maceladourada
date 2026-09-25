// Show the site deploy status (GitHub Actions "Build and deploy") on the CMS
// "Publicar" button and block it while a deploy is running, so editors know
// when their changes are live and don't stack up publishes.
// The repository is public, so the Actions API is read without a token.

const RUNS_URL = 'https://api.github.com/repos/ecomplus-stores/maceladourada' +
  '/actions/workflows/build-and-deploy.yml/runs?branch=master&per_page=10'
const RUNS_PAGE = 'https://github.com/ecomplus-stores/maceladourada/actions/workflows/build-and-deploy.yml'
const PUBLISH_LABELS = ['Publicar', 'Publicando...', 'Publish', 'Publishing...']
const RUNNING_STATUSES = ['queued', 'in_progress', 'waiting', 'requested', 'pending']
const POLL_MS = 15000
const POLL_RUNNING_MS = 8000
// Time allowed for GitHub to start a run after a CMS publish (commit)
const PENDING_TIMEOUT_MS = 3 * 60 * 1000

let state = { status: 'unknown' }
let pendingSince = null
let pollTimer

const minutesAgo = date => {
  const min = Math.round((Date.now() - new Date(date).getTime()) / 60000)
  return min < 1 ? 'agora' : `há ${min} min`
}

const fetchRuns = async () => {
  // no-cache makes the browser revalidate with ETag, and GitHub doesn't
  // count 304 responses against the unauthenticated rate limit
  const res = await fetch(RUNS_URL, { cache: 'no-cache' })
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const { workflow_runs: runs } = await res.json()
  return runs || []
}

const computeState = runs => {
  const running = runs.filter(run => RUNNING_STATUSES.includes(run.status))
  if (pendingSince && runs.some(run => new Date(run.created_at).getTime() >= pendingSince - 10000)) {
    pendingSince = null
  } else if (pendingSince && Date.now() - pendingSince > PENDING_TIMEOUT_MS) {
    // Changes outside the workflow paths don't trigger a deploy
    pendingSince = null
  }
  if (running.length) {
    const current = running.find(run => run.status === 'in_progress') || running[running.length - 1]
    return {
      status: 'running',
      label: `Publicando no site… ${minutesAgo(current.run_started_at || current.created_at)}` +
        (running.length > 1 ? ` (+${running.length - 1} na fila)` : ''),
      title: 'Aguarde a publicação atual terminar para publicar de novo'
    }
  }
  if (pendingSince) {
    return {
      status: 'running',
      label: 'Iniciando publicação…',
      title: 'Aguarde a publicação começar'
    }
  }
  // Runs replaced in the concurrency queue end as cancelled, not failures
  const last = runs.find(run => run.status === 'completed' &&
    !['cancelled', 'skipped'].includes(run.conclusion))
  if (!last) return { status: 'unknown' }
  if (last.conclusion === 'success') {
    return {
      status: 'success',
      title: `Site atualizado ${minutesAgo(last.updated_at)}`
    }
  }
  return {
    status: 'failed',
    title: `A última publicação falhou (${minutesAgo(last.updated_at)}). ` +
      `Tente publicar de novo; se continuar falhando, veja ${RUNS_PAGE}`
  }
}

const findPublishButtons = () => [...document.querySelectorAll('[role="button"], button')]
  .filter(el => PUBLISH_LABELS.includes(el.textContent.trim()))

const render = () => {
  findPublishButtons().forEach(btn => {
    // CMS is still committing ("Publicando..."), keep its own label
    const isSaving = /\.\.\.$/.test(btn.textContent.trim())
    btn.dataset.deploy = isSaving ? '' : state.status
    btn.dataset.deployLabel = state.label || ''
    btn.title = state.title || ''
    if (state.status === 'running') {
      btn.setAttribute('aria-disabled', 'true')
    } else {
      btn.removeAttribute('aria-disabled')
    }
  })
}

const poll = async () => {
  clearTimeout(pollTimer)
  try {
    state = computeState(await fetchRuns())
  } catch (err) {
    // Never lock editors out because of the status check itself
    console.error(err)
    state = { status: 'unknown' }
  }
  render()
  pollTimer = setTimeout(poll, state.status === 'running' ? POLL_RUNNING_MS : POLL_MS)
}

const style = `
[data-deploy="running"] {
  pointer-events: none !important;
  opacity: .65;
  font-size: 0 !important;
}
[data-deploy="running"]::after {
  content: attr(data-deploy-label);
  font-size: 14px;
}
[data-deploy="failed"]::after {
  content: " • última falhou";
  color: #ff6b6b;
  font-weight: 700;
}
[data-deploy="success"]::after {
  content: " ✓";
  color: #3ddc97;
}
`

export default () => {
  const styleEl = document.createElement('style')
  styleEl.textContent = style
  document.head.appendChild(styleEl)

  // Block any interaction with the publish button while deploying,
  // capture phase runs before React handlers
  ;['click', 'mousedown', 'pointerdown', 'touchstart', 'keydown'].forEach(type => {
    window.addEventListener(type, e => {
      if (state.status === 'running' && e.target.closest && e.target.closest('[data-deploy="running"]')) {
        e.preventDefault()
        e.stopPropagation()
      }
    }, true)
  })

  // React re-renders the toolbar, so tag the button again on DOM changes
  new MutationObserver(render).observe(document.body, { childList: true, subtree: true })

  // A publish commits to master, the deploy run starts a few seconds later
  if (window.CMS && window.CMS.registerEventListener) {
    window.CMS.registerEventListener({
      name: 'postPublish',
      handler: () => {
        pendingSince = Date.now()
        state = computeState([])
        render()
        setTimeout(poll, 5000)
      }
    })
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) poll()
  })
  poll()
}
