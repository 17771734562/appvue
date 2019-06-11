<template>
    <div id="app">
        <!--顶部导航栏-->
        <header id="header" class="mui-bar mui-bar-nav" v-show="!(path === '/about')">
            <h1 class="mui-title">首页</h1>
            <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left"><span
                    class="mui-icon mui-icon-left-nav"></span>首页
            </button>
        </header>

        <transition>
            <router-view></router-view>
        </transition>


        <!--底部选项卡-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/about">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/personal">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
          return{
              path:''
          }
        },
        // 判断路由
        mounted() {
            this.path = this.$route.path;
            //console.log(this.$route.path)
        },
        //数据监听
        watch:{
            $route(to,from){
                //console.log(to,from);
                this.path = to.path
            }
        }
    }
</script>


<style>
    #app {
        /*padding-top: 40px;*/
        /*横向溢出隐藏*/
        overflow-x: hidden;
        padding-bottom: 55px;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s;
    }

    .footer {
        background-color: rgb(38, 162, 255);
        box-shadow: 0 0 0;
    }

    .footer span {
        color: #fff;
    }
</style>
