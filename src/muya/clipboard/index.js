import { mixins } from '@/muya/utils'
import copy from '@/muya/clipboard/copy'
import cut from '@/muya/clipboard/cut'
import paste from '@/muya/clipboard/paste'
import { BLOCK_DOM_PROPERTY } from '@/muya/config'

class Clipboard {
  constructor (muya) {
    this.muya = muya
    this.copyType = 'normal' // `normal` or `copyAsMarkdown` or `copyAsHtml`
    this.pasteType = 'normal' // `normal` or `pasteAsPlainText`
    this.copyInfo = null

    this.listen()
  }

  listen () {
    const { domNode, eventCenter } = this.muya

    const copyCutHandler = (event) => {
      event.preventDefault()
      event.stopPropagation()

      const isCut = event.type === 'cut'

      if (isCut) {
        this.cutHandler(event)
      }

      return this.copyHandler(event)
    }

    eventCenter.attachDOMEvent(domNode, 'copy', copyCutHandler)
    eventCenter.attachDOMEvent(domNode, 'cut', copyCutHandler)
    eventCenter.attachDOMEvent(domNode, 'paste', this.pasteHandler.bind(this))
  }

  getTargetBlock (event) {
    const { path } = event
    const domNode = [...path].find(p => p[BLOCK_DOM_PROPERTY])

    return domNode && domNode[BLOCK_DOM_PROPERTY].isContentBlock ? domNode[BLOCK_DOM_PROPERTY] : null
  }

  copyAsMarkdown () {
    this.copyType = 'copyAsMarkdown'
    document.execCommand('copy')
    this.copyType = 'normal'
  }

  copyAsHtml () {
    this.copyType = 'copyAsHtml'
    document.execCommand('copy')
    this.copyType = 'normal'
  }

  pasteAsPlainText () {
    this.pasteType = 'pasteAsPlainText'
    document.execCommand('paste')
    this.pasteType = 'normal'
  }

  copy (type, info) {
    this.copyInfo = info
    this.copyType = type
    document.execCommand('copy')
    this.copyType = 'normal'
  }
}

mixins(
  Clipboard,
  copy,
  cut,
  paste
)

export default Clipboard
