<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'app',
        created() {
            document.body.removeChild(document.getElementById('appLoading'));
        },
        mounted() {
            this.$store.dispatch('home/initConfig');
        }
    }
</script>

<style lang="less">
    @import url("./mixin/mixin.less");
</style>
