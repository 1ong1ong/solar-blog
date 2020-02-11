<template>
    <div class="title-balloon">
        <section/>
        <section>{{title}}</section>
        <section/>
        <section/>
    </div>
</template>

<script>
    export default {
        name: "TitleBalloon",
        props: {
            title: String
        }
    }
</script>

<style scoped lang="less">

    @keyframes ball-1 {
        from {transform: translateY(-4px)}
        to {transform: translateY(4px)}
    }
    @keyframes ball-2 {
        from {transform: translateY(4px)}
        to {transform: translateY(-4px)}
    }
    @keyframes ball-3 {
        from {transform: translateY(-4px)}
        to {transform: translateY(4px)}
    }

    .title-balloon {
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        section:first-child {
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-image: linear-gradient(0deg,#3de0ad,#d0f2e9);
            animation: ball-1 2.3s ease-in-out infinite alternate;
        }
        section:nth-child(2) {
            display: block;
            padding: 0 10px;
            font-size: 26px;
            font-weight: 400;
            letter-spacing: 1.5px;
            color: rgba(0,0,0,.85);
            /*cursor: pointer;*/
            transition: .25s;
        }
        section:nth-child(3) {
            display: block;
            width: 24px;
            height: 24px;
            border-radius: 100%;
            background-image: linear-gradient(270deg,#3ed4e9,#89edf6);
            animation: ball-2 2.9s ease-in-out infinite alternate;
        }
        section:last-child {
            display: block;
            margin-top: 10px;
            margin-left: -8px;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background: rgba(91,168,238,.6);
            animation: ball-3 2.1s ease-in-out infinite alternate;
        }
    }
</style>