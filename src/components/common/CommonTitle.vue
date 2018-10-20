<template>
    <div class="common-title">
        <div class="app-container app-flex-row common-title-block">
            <div class="common-title-span">{{title}}用户，您好！</div>
            <div class="common-title-icons app-flex-row">
                <div class="common-icons-group app-flex-row">
                    <i class="iconfont icon-home"></i>
                    <span class="common-icons-span">首页</span>
                </div>
                <div class="common-icons-group app-flex-row">
                    <i class="iconfont icon-notice"></i>
                    <span class="common-icons-span">公告</span>
                </div>
                <div class="common-icons-group app-flex-row">
                    <i class="iconfont icon-uer-message"></i>
                    <span class="common-icons-span">用户信息</span>
                    <i class="common-triangle"></i>
                </div>
                <div class="common-icons-group app-flex-row">
                    <i class="iconfont icon-feedback"></i>
                    <span class="common-icons-span">在线反馈</span>
                </div>
                <div class="common-icons-group app-flex-row">
                    <i class="iconfont icon-manual"></i>
                    <span class="common-icons-span">帮助手册</span>
                </div>
                <div class="common-icons-group app-flex-row">
                    <i class="iconfont icon-out"></i>
                    <span class="common-icons-span">退出</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['title'],
  computed: {
    ...mapGetters({
      theme: 'gettheme'
    })
  },
  mounted () {
    console.log(this.theme)
  }
}
</script>
<style lang="less" scoped>
.common-title{
    width: 100%;
    height: 30px;
    background-color: var(--title-background-color);
    color: var(--title-font-color);
    font-size: 1.2rem;
    .common-title-block{
        justify-content: space-between;
    }
    .common-icons-group{
        padding: 0 10px;
        position: relative;
        height: 100%;
        .iconfont{
            color: #688197;
            margin-right: 5px;
            &.icon-notice{
                font-size: 18px;
            }
        }
        &::after{
            content: "|";
            line-height: 1.5;
            position: absolute;
            right: 0;
            color: #DCDCDC;
        }
        &:last-of-type{
            &::after{
                display: none;
            }
        }
        .common-triangle{
            display: inline-block;
            border-width: 7.2px 5.8px 0 5.8px;
            border-style: solid;
            border-color: #666 transparent transparent transparent;
            border-radius: 4px;
            margin-left: 4px;
            margin-top: 2px;
        }
    }
}
</style>
