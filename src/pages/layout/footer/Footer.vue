<template>
    <div class="foot">
        <div class="content">
            <a-row >
<!--                <a-col :xs="24" :sm="8">-->
<!--                    <div class="box">-->
<!--                        <div class="title">-->
<!--                            资源推荐-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            敬请期待-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </a-col>-->
                <a-col :xs="24" :sm="12">
                    <div class="box">
                        <div class="title">
                            相关信息
                        </div>
                        <div class="item">
                            本站托管于 GitHub
                        </div>
                        <div class="item" @click="routeHref('http://www.beian.miit.gov.cn')">
                            浙 ICP 备18050633号
                        </div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="12">
                    <div class="box">
                        <div class="title">
                            其他
                        </div>
                        <div class="item">
                            联系我Q：970863783
                        </div>
                        <div class="item">
                            QQ交流群：294372566
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-divider class="divider"/>
            <div class="bottom">
                <span>
                    Made with
                    <span><a-icon type="heart" theme="filled" style="font-size: 24px; color: #b24140"/></span>
                    by <span>CXL</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            routeHref(url) {
                window.open(url,'_blank')
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../../mixin/mixin.less");


    .foot {
        width: 100%;
        min-height: 300px;
        background-color: black;

        .content {
            .response-width();
            margin: 0 auto;
            color: white;

            .box {
                padding: 10px 0 10px 30%;
                min-height: 140px;

                @media (max-width: 576px) {
                    text-align: center;
                    padding: 10px;
                }

                .title {
                    font-size: 18px;
                    margin: 30px 0;
                }

                .item {
                    margin: 20px 0;
                    font-size: 15px;

                    &:hover {
                        cursor: pointer;
                        color: #2C5DB2;
                    }
                }
            }
        }

        .divider {
            background-color: #8f8f8f;
        }

        .bottom {
            text-align: center;
            font-size: 18px;
            padding-bottom: 40px;
            color: #8f8f8f;
        }
    }
</style>