<template>
    <div class="foot">
        <div class="content">
            <a-row :gutter="{ xs: 8, sm: 16, md: 24}">
                <a-col :xs="24" :sm="8">
                    <div class="box">
                        <div class="title">
                            资源推荐
                        </div>
                        <div class="item">
                            敬请期待
                        </div>
                        <div class="item">
                            <!--                            资源推荐-->
                        </div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="8">
                    <div class="box">
                        <div class="title">
                            相关信息
                        </div>
                        <!--                        <div class="item">-->
                        <!--                            本站托管于 Coding-->
                        <!--                        </div>-->
                        <div class="item">
                            本站托管于 Coding
                        </div>
                        <div class="item">
                            浙 ICP 备 18050633 号
                        </div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="8">
                    <div class="box">
                        <div class="title">
                            其他
                        </div>
                        <!--                        <div class="item">-->
                        <!--                            资源推荐-->
                        <!--                        </div>-->
                        <div class="item">
                            社区QQ交流群：970863783
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-divider class="divider"/>
            <div class="bottom">
                <span>
                    Made with
                    <span><a-icon type="heart" theme="filled" style="font-size: 24px; color: #b24140"/></span>
                    by <span>cxl</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less">
    @import url("../../../mixin/mixin.less");


    .foot {
        width: 100%;
        min-height: 340px;
        background-color: black;

        .content {
            .response-width();
            margin: 0 auto;
            color: white;

            .box {
                padding: 10px 0 10px 30%;
                min-height: 200px;
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