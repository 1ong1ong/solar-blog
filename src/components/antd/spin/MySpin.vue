<template>
    <div class='my-spin-diy'>
        <a-spin>
            <a-icon slot="indicator" type="loading" style="font-size: 24px"/>
        </a-spin>
    </div>
</template>

<script>
    export default {
        name: "MySpin",
        data() {
            return {}
        },
    }
</script>

<style scoped lang="less">
    .my-spin-diy {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        text-align: center;
        padding-top: 300px;
        background: rgba(215, 215, 215, 0.1);
        z-index: 1000;

        .ant-spin-dot i {
            background: #1890ff;
        }
    }

</style>