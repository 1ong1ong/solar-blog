<template>
    <div class="title-line-wrapper"
         :style="{'background-color': backgroundColor, 'height': height, 'margin-top': marginTop, 'margin-bottom': marginBottom}">
        <div class="title-line"></div>
    </div>
</template>

<script>
    export default {
        name: "TitleLine",
        props: {
            backgroundColor: {
                type: String,
                default: 'none'
            },
            height: {
                type: String,
                default: '2px'
            },
            marginTop: {
                type: String,
                default: '0px'
            },
            marginBottom: {
                type: String,
                default: '0px'
            }
        }
    }
</script>

<style scoped lang="less">
    @keyframes titleLine2 {
        from {
            left: -64px;
        }
        to {
            left: 100%+64px
        }
    }

    .title-line-wrapper {
        width: 100%;
        height: 2px;
        overflow: hidden;
        position: relative;

        .title-line {
            width: 64px;
            height: 100%;
            position: absolute;
            background: linear-gradient(90deg, rgba(154, 105, 236, 0), #436BAF);
            transform: translateX(-64px);
            -webkit-animation: titleLine2 3s ease-in-out 0s infinite;
            animation: titleLine2 3s ease-in-out 0s infinite;
        }
    }
</style>