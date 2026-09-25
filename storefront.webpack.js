const path = require('path')

// Orders are quotations sent via WhatsApp, not purchases: swap the
// cart/purchase wording from @ecomplus/i18n used by all Vue components
module.exports = () => ({
  resolve: {
    alias: {
      '@ecomplus/i18n$': path.resolve(__dirname, 'template/js/i18n-quote.js')
    }
  }
})
