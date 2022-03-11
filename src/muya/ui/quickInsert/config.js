import paragraphIcon from '@/muya/assets/icons/paragraph/2.png'
import htmlIcon from '@/muya/assets/icons/html/2.png'
import hrIcon from '@/muya/assets/icons/horizontal_line/2.png'
import frontMatterIcon from '@/muya/assets/icons/front_matter/2.png'
import header1Icon from '@/muya/assets/icons/heading_1/2.png'
import header2Icon from '@/muya/assets/icons/heading_2/2.png'
import header3Icon from '@/muya/assets/icons/heading_3/2.png'
import header4Icon from '@/muya/assets/icons/heading_4/2.png'
import header5Icon from '@/muya/assets/icons/heading_5/2.png'
import header6Icon from '@/muya/assets/icons/heading_6/2.png'
import newTableIcon from '@/muya/assets/icons/new_table/2.png'
import bulletListIcon from '@/muya/assets/icons/bullet_list/2.png'
import codeIcon from '@/muya/assets/icons/code/2.png'
import quoteIcon from '@/muya/assets/icons/quote_block/2.png'
import todoListIcon from '@/muya/assets/icons/todolist/2.png'
import mathblockIcon from '@/muya/assets/icons/math/2.png'
import orderListIcon from '@/muya/assets/icons/order_list/2.png'
import flowchartIcon from '@/muya/assets/icons/flowchart/2.png'
import sequenceIcon from '@/muya/assets/icons/sequence/2.png'
import mermaidIcon from '@/muya/assets/icons/mermaid/2.png'
import plantumlIcon from '@/muya/assets/icons/plantuml/2.png'
import vegaIcon from '@/muya/assets/icons/chart/2.png'
import { isOsx } from '@/muya/config'

import { deepCopy } from '@/muya/utils'
import emptyStates from '@/muya/config/emptyStates'
import ScrollPage from '@/muya/block/scrollPage'

import logger from '@/muya/utils/logger'
const debug = logger('quickinsert:')

const COMMAND_KEY = isOsx ? '⌘' : 'Ctrl'
const OPTION_KEY = isOsx ? '⌥' : 'Alt'
const SHIFT_KEY = isOsx ? '⇧' : 'Shift'

// Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn

export const MENU_CONFIG = [
  {
    name: '基础块',
    children: [{
      title: '文本',
      subTitle: '插入普通文本',
      label: 'paragraph',
      shortCut: `${COMMAND_KEY}+0`,
      icon: paragraphIcon
    },
      {
      title: '主标题',
      subTitle: '插入主标题',
      label: 'atx-heading 1',
      shortCut: `${COMMAND_KEY}+1`,
      icon: header1Icon
    }, {
      title: '二级标题',
      subTitle: '插入二级标题',
      label: 'atx-heading 2',
      shortCut: `${COMMAND_KEY}+2`,
      icon: header2Icon
    }, {
      title: '三级标题',
      subTitle: '插入三级标题',
      label: 'atx-heading 3',
      shortCut: `${COMMAND_KEY}+3`,
      icon: header3Icon
    },
      {
        title: '分割线',
        subTitle: '插入横向分割线',
        label: 'thematic-break',
        shortCut: `${OPTION_KEY}+${COMMAND_KEY}+-`,
        icon: hrIcon
      },
      {
        title: '引用',
        subTitle: '插入一段引用',
        label: 'block-quote',
        shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Q`,
        icon: quoteIcon
      },
      {
        title: '列表',
        subTitle: '插入列表',
        label: 'bullet-list',
        shortCut: `${OPTION_KEY}+${COMMAND_KEY}+U`,
        icon: bulletListIcon
      },
      {
        title: '数字列表',
        subTitle: '插入数字列表',
        label: 'order-list',
        shortCut: `${OPTION_KEY}+${COMMAND_KEY}+O`,
        icon: orderListIcon
      }, {
        title: '待办',
        subTitle: '插入待办列表',
        label: 'task-list',
        shortCut: `${OPTION_KEY}+${COMMAND_KEY}+X`,
        icon: todoListIcon
      },
      {
        title: '表格',
        subTitle: '插入表格',
        label: 'table',
        shortCut: `${SHIFT_KEY}+${COMMAND_KEY}+T`,
        icon: newTableIcon
      },
      {
        title: '数学公式',
        subTitle: '使用LaTeX插入数学公式',
        label: 'math-block',
        shortCut: `${OPTION_KEY}+${COMMAND_KEY}+M`,
        icon: mathblockIcon
      },
      {
        title: '代码块',
        subTitle: '插入一段代码',
        label: 'code-block',
        shortCut: `${OPTION_KEY}+${COMMAND_KEY}+C`,
        icon: codeIcon
      },
    ]
  }, {
    name: '高级块',
    children: [
      {
        title: 'Mermaid',
        subTitle: '使用mermaid语法插入图表',
        label: 'diagram mermaid',
        icon: mermaidIcon
      }, {
        title: 'Plantuml',
        subTitle: '使用plantuml语法插入图表',
        label: 'diagram plantuml',
        icon: plantumlIcon
      },
      {
      title: 'VegaChart',
      subTitle: '使用vega-lite语法插入图表',
      label: 'diagram vega-lite',
      icon: vegaIcon
    }, {
      title: 'flowchart',
      subTitle: '使用flowchart语法插入图表',
      label: 'diagram flowchart',
      icon: flowchartIcon
    }, ]
  }
]
// export const MENU_CONFIG = [
//   {
//     name: 'basic block',
//     children: [{
//       title: 'Paragraph',
//       subTitle: '/Lorem Ipsum is simply dummy text',
//       label: 'paragraph',
//       shortCut: `${COMMAND_KEY}+0`,
//       icon: paragraphIcon
//     }, {
//       title: 'Horizontal Line',
//       subTitle: '---',
//       label: 'thematic-break',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+-`,
//       icon: hrIcon
//     }, {
//       title: 'Front Matter',
//       subTitle: '--- Lorem Ipsum ---',
//       label: 'frontmatter',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Y`,
//       icon: frontMatterIcon
//     }]
//   },
//   {
//     name: 'header',
//     children: [{
//       title: 'Header 1',
//       subTitle: '# Lorem Ipsum is simply ...',
//       label: 'atx-heading 1',
//       shortCut: `${COMMAND_KEY}+1`,
//       icon: header1Icon
//     }, {
//       title: 'Header 2',
//       subTitle: '## Lorem Ipsum is simply ...',
//       label: 'atx-heading 2',
//       shortCut: `${COMMAND_KEY}+2`,
//       icon: header2Icon
//     }, {
//       title: 'Header 3',
//       subTitle: '### Lorem Ipsum is simply ...',
//       label: 'atx-heading 3',
//       shortCut: `${COMMAND_KEY}+3`,
//       icon: header3Icon
//     }, {
//       title: 'Header 4',
//       subTitle: '#### Lorem Ipsum is simply ...',
//       label: 'atx-heading 4',
//       shortCut: `${COMMAND_KEY}+4`,
//       icon: header4Icon
//     }, {
//       title: 'Header 5',
//       subTitle: '##### Lorem Ipsum is simply ...',
//       label: 'atx-heading 5',
//       shortCut: `${COMMAND_KEY}+5`,
//       icon: header5Icon
//     }, {
//       title: 'Header 6',
//       subTitle: '###### Lorem Ipsum is simply ...',
//       label: 'atx-heading 6',
//       shortCut: `${COMMAND_KEY}+6`,
//       icon: header6Icon
//     }]
//   }, {
//     name: 'advanced block',
//     children: [{
//       title: 'Table Block',
//       subTitle: '|Lorem | Ipsum is simply |',
//       label: 'table',
//       shortCut: `${SHIFT_KEY}+${COMMAND_KEY}+T`,
//       icon: newTableIcon
//     }, {
//       title: 'Display Math',
//       subTitle: '$$ Lorem Ipsum is simply $$',
//       label: 'math-block',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+M`,
//       icon: mathblockIcon
//     }, {
//       title: 'HTML Block',
//       subTitle: '<div> Lorem Ipsum is simply </div>',
//       label: 'html-block',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+J`,
//       icon: htmlIcon
//     }, {
//       title: 'Code Block',
//       subTitle: '```java Lorem Ipsum is simply ```',
//       label: 'code-block',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+C`,
//       icon: codeIcon
//     }, {
//       title: 'Quote Block',
//       subTitle: '>Lorem Ipsum is simply ...',
//       label: 'block-quote',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+Q`,
//       icon: quoteIcon
//     }]
//   }, {
//     name: 'list block',
//     children: [{
//       title: 'Order List',
//       subTitle: '1. Lorem Ipsum is simply ...',
//       label: 'order-list',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+O`,
//       icon: orderListIcon
//     }, {
//       title: 'Bullet List',
//       subTitle: '- Lorem Ipsum is simply ...',
//       label: 'bullet-list',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+U`,
//       icon: bulletListIcon
//     }, {
//       title: 'To-do List',
//       subTitle: '- [x] Lorem Ipsum is simply ...',
//       label: 'task-list',
//       shortCut: `${OPTION_KEY}+${COMMAND_KEY}+X`,
//       icon: todoListIcon
//     }]
//   },
//   {
//     name: 'diagram',
//     children: [{
//       title: 'Vega Chart',
//       subTitle: 'Render flow chart by vega-lite.js',
//       label: 'diagram vega-lite',
//       icon: vegaIcon
//     }, {
//       title: 'Flow Chart',
//       subTitle: 'Render flow chart by flowchart.js',
//       label: 'diagram flowchart',
//       icon: flowchartIcon
//     }, {
//       title: 'Sequence Diagram',
//       subTitle: 'Render diagram by js-sequence',
//       label: 'diagram sequence',
//       icon: sequenceIcon
//     }, {
//       title: 'Mermaid',
//       subTitle: 'Render Diagram by mermaid',
//       label: 'diagram mermaid',
//       icon: mermaidIcon
//     }, {
//       title: 'Plantuml',
//       subTitle: 'Render Diagram by plantuml',
//       label: 'diagram plantuml',
//       icon: plantumlIcon
//     }]
//   }
// ]

export const replaceBlockByLabel = ({ block, muya, label, text = '' }) => {
  const {
    preferLooseListItem,
    bulletListMarker,
    orderListDelimiter,
    frontmatterType
  } = muya.options
  let newBlock = null
  let state = null

  switch (label) {
    case 'paragraph':

    case 'thematic-break':

    case 'table':

    case 'math-block':

    case 'html-block':

    case 'code-block':

    case 'block-quote':
      state = deepCopy(emptyStates[label])
      if (label === 'paragraph') {
        state.text = text
      } else if (label === 'block-quote') {
        state.children[0].text = text
      }
      newBlock = ScrollPage.loadBlock(label).create(muya, state)
      break

    case 'frontmatter':
      state = deepCopy(emptyStates.frontmatter)
      state.meta.type = frontmatterType
      state.meta.lang = /\+-/.test(frontmatterType) ? 'yaml' : 'json'
      newBlock = ScrollPage.loadBlock(label).create(muya, state)
      break

    case 'atx-heading 1':

    case 'atx-heading 2':

    case 'atx-heading 3':

    case 'atx-heading 4':

    case 'atx-heading 5':

    case 'atx-heading 6':
      state = deepCopy(emptyStates['atx-heading'])
      // eslint-disable-next-line no-case-declarations
      const [blockName, level] = label.split(' ')
      state.meta.level = level
      state.text = '#'.repeat(+level) + ' ' + text
      newBlock = ScrollPage.loadBlock(blockName).create(muya, state)
      break

    case 'order-list':
      state = deepCopy(emptyStates[label])
      state.meta.loose = preferLooseListItem
      state.meta.delimiter = orderListDelimiter
      if (text) {
        state.children[0].children[0].text = text
      }
      newBlock = ScrollPage.loadBlock(label).create(muya, state)
      break

    case 'bullet-list':

    case 'task-list':
      state = deepCopy(emptyStates[label])
      state.meta.loose = preferLooseListItem
      state.meta.marker = bulletListMarker
      if (text) {
        state.children[0].children[0].text = text
      }
      newBlock = ScrollPage.loadBlock(label).create(muya, state)
      break

    case 'diagram vega-lite':

    case 'diagram flowchart':

    case 'diagram sequence':

    case 'diagram mermaid':

    case 'diagram plantuml':
      state = deepCopy(emptyStates.diagram)
      // eslint-disable-next-line no-case-declarations
      const [name, type] = label.split(' ')
      state.meta.type = type
      state.meta.lang = type === 'vega-lite' ? 'json' : 'ymal'
      newBlock = ScrollPage.loadBlock(name).create(muya, state)
      break

    default:
      debug.log('Unknow label in quick insert')
      break
  }

  block.replaceWith(newBlock)
  if (label === 'thematic-break') {
    const nextParagraphBlock = ScrollPage.loadBlock('paragraph').create(muya, deepCopy(emptyStates.paragraph))
    newBlock.parent.insertAfter(nextParagraphBlock, newBlock)
    const cursorBlock = nextParagraphBlock.firstContentInDescendant()
    cursorBlock.setCursor(0, 0, true)
  } else {
    const cursorBlock = newBlock.firstContentInDescendant()
    // Set the cursor between <div>\n\n</div> when create html-block
    const offset = label === 'html-block' ? 6 : cursorBlock.text.length
    cursorBlock.setCursor(offset, offset, true)
  }
}
