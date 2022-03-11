<template>
    <div id='editor' class="editor-wrapper"></div>
</template>

<script>
    import Muya from "@/muya/muya";
    import EmojiPicker from '@/muya/ui/emojiPicker'
    import FormatPicker from '@/muya/ui/formatPicker'
    import ImageSelector from '@/muya/ui/imageSelector'
    import ImageToolBar from '@/muya/ui/imageToolbar'
    import ImageTransformer from '@/muya/ui/transformer'
    import CodePicker from '@/muya/ui/codePicker'
    import TableColumnTools from '@/muya/ui/tableColumnTools'
    import QuickInsert from '@/muya/ui/quickInsert'
    import TableDragBar from '@/muya/ui/tableDragBar'
    import TableTools from '@/muya/ui/tableTools'
    import PreviewTools from '@/muya/ui/previewTools'

    import FrontButton from '@/muya/ui/frontButton'
    import FrontMenu from '@/muya/ui/frontMenu'
    export default {
        name: "editor",
        mounted() {
            this.init('# Milkdown\n' +
                '\n' +
                '![greeting bear](https://milkdown.dev/polar.jpeg)\n' +
                '\n' +
                '> Milkdown 是一个所见即所得的编辑器框架。\n' +
                '>\n' +
                '> 🍼 这里是[代码仓库](https://github.com/Saul-Mirone/milkdown) (点击右键打开链接)。\\\n' +
                '> 我们 ~~只支持 commonmark~~. GFM 也支持！\n' +
                '\n' +
                '您可以在**双栏编辑模式**中看到 markdown 文本。\n' +
                '\n' +
                '*   特性\n' +
                '\n' +
                '    *   [x] 📝 **所见即所得的 Markdown** - 以一种优雅的方式编写 markdown\n' +
                '\n' +
                '    *   [x] 🎨 **可定制主题** - 主题可以通过 npm 包安装和共享\n' +
                '\n' +
                '    *   [x] 🎮 **可交互** - 通过插件支持你的脑洞\n' +
                '\n' +
                '    *   [x] 🦾 **值得信赖** - 基于[prosemirror](https://prosemirror.net/) 和 [remark](https://github.com/remarkjs/remark)构建\n' +
                '\n' +
                '    *   [x] ⚡ **斜线指令和工具条** - 让任何人都可以使用，通过插件\n' +
                '\n' +
                '    *   [x] 🧮 **数学支持** - LaTeX 数学公式支持，通过插件\n' +
                '\n' +
                '    *   [x] 📊 **表格支持** - 拥有流畅的 ui 的表格支持，通过插件\n' +
                '\n' +
                '    *   [x] 📰 **图表支持** - 基于[mermaid](https://mermaid-js.github.io/mermaid/#/)的图表支持，通过插件\n' +
                '\n' +
                '    *   [x] 🍻 **协同编辑** - 基于[yjs](https://docs.yjs.dev/)的协同编辑支持，通过插件\n' +
                '\n' +
                '    *   [x] 💾 **剪贴板** - 支持 markdown 格式的复制粘贴，通过插件\n' +
                '\n' +
                '    *   [x] 👍 **Emoji** - 支持 emoji 快捷指令和选择器，通过插件\n' +
                '\n' +
                '*   作者\n' +
                '\n' +
                '    *   开发者: [Mirone](https://github.com/Saul-Mirone)\n' +
                '\n' +
                '    *   设计师: [Meo](https://www.meo.cool/)\n' +
                '\n' +
                '***\n' +
                '\n' +
                '你可以添加行内代码例如 `inline code` 和代码块：\n' +
                '\n' +
                '```javascript\n' +
                'function main() {\n' +
                '    console.log(\'Hello milkdown!\');\n' +
                '}\n' +
                '```\n' +
                '\n' +
                '> Tips: 使用`Mod-Enter`来退出块级元素，例如代码块。\n' +
                '\n' +
                '***\n' +
                '\n' +
                '你可以输入`||`和一个空格来创建表格：\n' +
                '\n' +
                '| 表头 1 |   表头 2   |\n' +
                '| ---- | :------: |\n' +
                '| 内容 1 | ~~内容 1~~ |\n' +
                '| 内容 2 | **内容** 2 |\n' +
                '\n' +
                '***\n' +
                '\n' +
                '数学公式通过 [TeX 表达式](https://en.wikipedia.org/wiki/TeX)支持。\n' +
                '\n' +
                '这里我们有行内公式： $E = mc^2$，你可以点击并编辑它。\n' +
                '\n' +
                '数学公式块也是支持的。\n' +
                '\n' +
                '$$\n' +
                '\\begin{aligned}\n' +
                'T( (v_1 + v_2) \\otimes w) &= T(v_1 \\otimes w) + T(v_2 \\otimes w) \\\\\n' +
                'T( v \\otimes (w_1 + w_2)) &= T(v \\otimes w_1) + T(v \\otimes w_2) \\\\\n' +
                'T( (\\alpha v) \\otimes w ) &= T( \\alpha ( v \\otimes w) ) \\\\\n' +
                'T( v \\otimes (\\alpha w) ) &= T( \\alpha ( v \\otimes w) ) \\\\\n' +
                '\\end{aligned}\n' +
                '$$\n' +
                '\n' +
                '你可以输入`$$`和一个空格来创建数学公式块。\n' +
                '\n' +
                '***\n' +
                '\n' +
                '使用 [emoji 快捷指令](https://www.webfx.com/tools/emoji-cheat-sheet/) 例如 `:+1:` 来添加 emoji.\n' +
                '\n' +
                '在输入时，你也许注意到了 emoji 过滤器，尝试输入`:baby`来查看它。\n' +
                '\n' +
                '你也可以输入`:emoji:`来打开 emoji 选择器。\n' +
                '\n' +
                '***\n' +
                '\n' +
                '图表由 [mermaid](https://mermaid-js.github.io/mermaid/#/)驱动。\n' +
                '\n' +
                '你可以输入 ` ```mermaid ` 来添加图表。\n' +
                '\n' +
                '```mermaid\n' +
                'graph TD;\n' +
                '    EditorState-->EditorView;\n' +
                '    EditorView-->DOMEvent;\n' +
                '    DOMEvent-->Transaction;\n' +
                '    Transaction-->EditorState;\n' +
                '```\n' +
                '\n' +
                '***\n' +
                '\n' +
                'Have fun!');
        },
        methods: {
            init(markdown) {
                const DEFAULT_MARKDOWN = markdown
                Muya.use(EmojiPicker)
                Muya.use(FormatPicker)
                Muya.use(ImageSelector, {
                    unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY
                })
                Muya.use(ImageToolBar)
                Muya.use(ImageTransformer)
                Muya.use(CodePicker)

                Muya.use(FrontButton)
                Muya.use(FrontMenu)
                Muya.use(TableColumnTools)
                Muya.use(QuickInsert)
                Muya.use(TableDragBar)
                Muya.use(TableTools)
                Muya.use(PreviewTools)
                const container = document.querySelector('#editor')
                const muya = new Muya(container, { markdown: DEFAULT_MARKDOWN, disableHtml: true })
                window.muya = muya
                muya.init()
                muya.on('json-change', (changes) => {
                    // console.log(JSON.stringify(muya.getState(), null, 2))
                    console.log(muya.getMarkdown())
                    // console.log(JSON.stringify(changes, null, 2))
                })
            }
        }
    }
</script>

<style scoped>


    .editor-wrapper{
        width: calc(100% - 240px);
        height: 100vh;
        overflow-y: auto;
    }
</style>
