import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main:           resolve(__dirname, 'index.html'),
        basket:         resolve(__dirname, 'basket.html'),
        product:        resolve(__dirname, 'product.html'),
        about:          resolve(__dirname, 'AboutUsPage.html'),
        contact:        resolve(__dirname, 'contact.html'),
        cart:           resolve(__dirname, 'cart.html'),
        firebase:       resolve(__dirname, 'firebase.html'),
        productDetails: resolve(__dirname, 'product-details.html'),
      }
    }
  }
})
