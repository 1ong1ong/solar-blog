<template>
    <div class="friend-card">
        <div class="card" :style="{'border-top': '3px solid ' + borderColor}">
            <a :href="link" target="_blank" class="title">
                {{title}}
            </a>
            <div class="subtitle">
                {{subtitle}}
            </div>
            <a :href="link" class="avatar" target="_blank"
               :style="{'background-image': 'url('+backgroundImg+')'}"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FriendCard",
        props: {
            borderColor: {
                type: String,
                default: '#B5B8EC'
            },
            backgroundImg: {
                type: String,
                default: 'https://pyai.top/images/avatar.jpg'
            },
            title: String,
            subtitle: String,
            link: String
        },
    }
</script>

<style scoped lang="less">
    .friend-card {
        height: 180px;
        width: 100%;
        padding: 10px;
        margin-bottom: 26px;

        .card {
            position: relative;
            margin: 15px 15px 30px;
            padding: 20px 15px;
            height: 150px;
            border-radius: 13px 13px 3px 3px;
            box-shadow: inset 0 -3px 0 2px hsla(0, 0%, 100%, .75), inset 0 -1px 0 #d8e0ea, inset -1px 0 0 #d8e0ea, inset 1px 0 0 #d8e0ea, 0 5px 5px rgba(215, 221, 230, .5);
            background: linear-gradient(#eaeef5, #fafbfc 12%, #fff);
            text-align: center;
            cursor: pointer;

            a {
                text-decoration: none;
                background-color: transparent;
                outline: none;
                cursor: pointer;
            }

            .title {
                color: #475669;
                text-shadow: 0 1px #fff;
            }

            .subtitle {
                font-size: 13px;
                color: #8492a6;
                text-shadow: 0 1px #fff;
            }

            .avatar {
                position: absolute;
                top: 100px;
                left: 50%;
                bottom: -20px;
                margin-left: -33px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 66px;
                height: 66px;
                color: #fff;
                text-shadow: 0 3px 5px rgba(0, 0, 0, .25);
                font-size: 25px;
                text-align: center;
                border-radius: 33px;
                box-shadow: 0 8px 15px rgba(0, 0, 0, .4);
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: cover;
                overflow: hidden;
                transition: top .6s cubic-bezier(0, 0.8, 0, 1.4), left .3s ease-out, width .3s ease-out, height .3s ease-out, border-radius .15s ease-out, margin-left .3s ease-out;
            }

            &:hover {
                .avatar {
                    width: 100%;
                    height: 150px;
                    margin-left: 0;
                    border-radius: 13px 13px 3px 3px;
                    top: 0;
                    left: 0;
                }
            }
        }

        &:hover {
            .card > .avatar {
                width: 100%;
                height: 150px;
                margin-left: 0;
                border-radius: 13px 13px 3px 3px;
                top: 0;
                left: 0;
                animation: cardHover 0.3s ease-in-out 0s 1;
            }
        }
    }

    @keyframes cardHover {
        from {
            width: 66px;
            height: 66px;
            margin-left: -33px;
            border-radius: 33px;
            top: 100px;
            left: 50%;
        }
        to {
            top: 0;
            width: 100%;
            height: 150px;
            margin-left: 0;
            border-radius: 13px 13px 3px 3px;
            left: 0;
        }
    }
</style>