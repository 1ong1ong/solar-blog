<template>
    <div class="timeline" :style="{'min-height': clientHeight+'px'}">
        <my-spin v-show="spin"/>

        <div class="content" v-for="(item,index) in timelineList" :key="index">
            <a-timeline>
                <a-timeline-item :color="colorOptions[index%colorOptions.length]">
                    <a-icon slot="dot" type="pushpin" :style="{fontSize: '16px', color: colorOptions[index%colorOptions.length]}"/>
                    <a-tag :color="colorOptions[index%colorOptions.length]">{{item.monthDate}}</a-tag>
                </a-timeline-item>
                <a-timeline-item :color="colorOptions[index%colorOptions.length]"  @click="toArticleDetail(item.id)" v-for="(item) in item.articleVos" :key="item.id">
                    <a-tag :color="colorOptions[index%colorOptions.length]">{{$moment(item.createTime).format('DD')}}</a-tag>
                    {{item.title}}
                </a-timeline-item>
            </a-timeline>
        </div>
    </div>
</template>

<script>
    import {getTimeline} from '../../api/article'

    export default {
        name: "TimeLine",
        data() {
            return {
                timelineList: [],
                spin: false,
                colorOptions: ["pink", "red", "orange", "green", "cyan", "blue", "purple"],
                clientHeight: null
            }
        },
        computed: {},
        mounted() {
            this.clientHeight = document.documentElement.clientHeight;
            this.getTimeline();
        },
        methods: {
            toArticleDetail(id) {
                this.$store.dispatch('home/resetMenuItem');

                this.$router.push({
                    path: '/pages/article/detail',
                    query: {article: id}
                })
            },
            getTimeline() {
                this.spin = true;
                getTimeline().then(res => {
                    this.spin = false;
                    this.timelineList = res
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("../../mixin/mixin.less");

    .timeline {
        .response-width();
        padding-top: 50px;
        margin: 0 auto 80px;
        .content {
            margin: 0 auto;
            @media (min-width: 1100px) {
                width: 50%;
            }
            @media (min-width: 768px) and (max-width: 1100px) {
                width: 50%;
            }
            @media (max-width: 768px) {
                width: 100%;
            }
            padding: 0 20px 0 20px;

            ul > li {
                padding-bottom: 30px;
                font-size: 16px;

                .ant-tag {
                    border-radius: 10px;
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>