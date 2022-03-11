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
                '![greeting bear](https://milkdown.dev/polar.jpeg)\n');
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
