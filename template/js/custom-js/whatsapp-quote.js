// Replace checkout with a WhatsApp quotation: client picks a store unit and
// a chat opens with the cart items prefilled.
import ecomCart from '@ecomplus/shopping-cart'

const UNITS = [
  { name: 'Vitória da Conquista - Matriz', phone: '5577999430418' },
  { name: 'Vitória da Conquista - Loja II', phone: '5577991629918' },
  { name: 'Itapetinga', phone: '5577999430116' },
  { name: 'Jequié', phone: '5573981463883' },
  { name: 'Ipiaú', phone: '5573991019201' },
  { name: 'Jaguaquara', phone: '5573988561814' }
]

const BTN_LABEL = 'Solicitar orçamento'
// Only the final button on the cart page (/app/#/cart) goes to WhatsApp
const CHECKOUT_SELECTOR = '.cart__btn-checkout'

const formatMoney = value => Number(value || 0)
  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const buildMessage = () => {
  const { items } = ecomCart.data
  const lines = ['Olá! Gostaria de um orçamento para os itens abaixo:', '']
  let total = 0
  items.forEach(item => {
    const price = item.final_price || item.price || 0
    const subtotal = price * item.quantity
    total += subtotal
    lines.push(`• ${item.quantity}x ${item.name}` +
      (item.sku ? ` (SKU ${item.sku})` : '') +
      ` - ${formatMoney(subtotal)}`)
  })
  lines.push('', `Total estimado: ${formatMoney(total)}`)
  return lines.join('\n')
}

const openChat = unit => {
  const url = `https://wa.me/${unit.phone}?text=${encodeURIComponent(buildMessage())}`
  window.open(url, '_blank', 'noopener')
}

let modal
const openUnitPicker = () => {
  if (!ecomCart.data.items.length) return
  if (!modal) {
    modal = document.createElement('div')
    modal.className = 'wa-quote'
    modal.innerHTML = `
<style>
  .wa-quote { position: fixed; inset: 0; z-index: 2000; display: flex; align-items: center;
    justify-content: center; background: rgba(0, 0, 0, .5); padding: 16px; }
  .wa-quote__box { background: #fff; border-radius: 8px; max-width: 420px; width: 100%;
    padding: 20px; max-height: 90vh; overflow-y: auto; }
  .wa-quote__box h5 { margin-bottom: 4px; }
  .wa-quote__box p { color: #6c757d; font-size: .9rem; }
  .wa-quote__unit { display: block; width: 100%; margin-bottom: 8px; text-align: left; }
</style>
<div class="wa-quote__box" role="dialog" aria-modal="true" aria-labelledby="wa-quote-title">
  <h5 id="wa-quote-title">${BTN_LABEL}</h5>
  <p>Escolha a unidade para enviar seu carrinho pelo WhatsApp:</p>
  ${UNITS.map((unit, i) => `
  <button type="button" class="wa-quote__unit btn btn-outline-success" data-unit="${i}">
    <i class="fab fa-whatsapp mr-1"></i> ${unit.name}
  </button>`).join('')}
  <button type="button" class="btn btn-link btn-block wa-quote__close">Cancelar</button>
</div>`
    modal.addEventListener('click', e => {
      const unitBtn = e.target.closest('[data-unit]')
      if (unitBtn) {
        openChat(UNITS[unitBtn.dataset.unit])
      } else if (e.target !== modal && !e.target.closest('.wa-quote__close')) {
        return
      }
      modal.remove()
    })
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.isConnected) modal.remove()
    })
  }
  document.body.appendChild(modal)
}

// Relabel via CSS: Vue owns the button text nodes, so the DOM is left untouched
const relabelStyle = `
${CHECKOUT_SELECTOR} {
  font-size: 0;
}
${CHECKOUT_SELECTOR}::after {
  content: '${BTN_LABEL}';
  font-size: 1rem;
}`

export default () => {
  // Capture phase so the link never navigates to checkout
  document.addEventListener('click', e => {
    if (e.target.closest(CHECKOUT_SELECTOR)) {
      e.preventDefault()
      e.stopPropagation()
      openUnitPicker()
    }
  }, true)

  const style = document.createElement('style')
  style.textContent = relabelStyle
  document.head.appendChild(style)

  // Any other way into checkout (minicart button, direct URL) lands on the
  // cart page, where the client can keep editing before asking for a quote
  const { storefrontApp } = window
  if (storefrontApp && storefrontApp.router) {
    const guard = () => {
      if (storefrontApp.router.currentRoute.name === 'checkout') {
        window.location.hash = '#/cart'
      }
    }
    storefrontApp.router.afterEach(guard)
    guard()
  }
}
