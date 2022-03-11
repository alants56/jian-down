<template>
    <div class="page-wrapper">
        <directory></directory>
        <editor></editor>
    </div>
</template>

<script>
    import Directory from "./directory/directory";
    import Editor from "./editor/editor";
    export default {
        name: "pageView",
        components: {Editor, Directory}
    }
</script>

<style scoped>
    .page-wrapper{
        display: flex;
        flex-direction: row;
    }
</style>
