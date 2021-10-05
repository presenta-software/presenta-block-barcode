import css from './style.css'
import JsBarcode from 'jsbarcode'

const block = function (el, config) {
  const content = config.content

  const child = document.createElement('div')
  child.classList.add(css.barcode)

  let uid = css.barcode + '-' + Math.random()
  uid = uid.replace('.', '')

  child.innerHTML = `<svg id="${uid}"></svg>`

  el.appendChild(child)

  JsBarcode('#' + uid, content, config)
}

export default block

block.install = Presenta => {
  Presenta.addBlock('barcode', block)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
