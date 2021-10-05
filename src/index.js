import css from './style.css'
import JsBarcode from 'jsbarcode'

const block = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {
    const content = config.content

    const child = document.createElement('div')
    child.classList.add(css.barcode)

    let uid = css.barcode + '-' + Math.random()
    uid = uid.replace('.', '')

    const frag = content ? `<svg id="${uid}"></svg>` : '<p>Barcode</p>'

    child.innerHTML = frag

    el.appendChild(child)

    console.log(config)

    if (content) {
      setTimeout(() => {
        JsBarcode('#' + uid, content, config)
        resolve(that)
      })
    } else {
      resolve(that)
    }
  })
}

export default block

block.install = Presenta => {
  Presenta.addBlock('barcode', block)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
