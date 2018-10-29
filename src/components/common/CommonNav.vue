<template>
    <div class="common-nav">
        <div class="app-container app-flex-row common-nav-title">
            <div class="common-log-input app-flex-row">

            </div>
            <img class="nav-log" src="../../assets/images/index_logo.png" />
            <div v-if="pages == 'index'" class="nav-input-group">
                <input class="nav-input-span" id="index"/>
                <i class="iconfont icon-search"></i>
            </div>
            <div v-if="pages == 'carstyle'" class="nav-input-group">
                <input class="nav-input-span" id="carstyle"/>
                <i class="iconfont icon-search"></i>
            </div>
            <div v-if="pages == 'handbook'" class="nav-handbook">
                <ul class="handbook-list-ul">
                    <li :class="{'handbook-list-li is-active':select == '用户手册'}">用户手册</li>
                    <li class="handbook-list-li">电路图册</li>
                    <li class="handbook-list-li">维修手册</li>
                    <li class="handbook-list-li">备件目录</li>
                    <li class="handbook-list-li">3C认证信息</li>
                    <li class="handbook-list-li">专用工具信息</li>
                    <li class="handbook-list-li">维修工艺信息</li>
                    <li class="handbook-list-li">技术通用</li>
                    <li class="handbook-list-li">VIN编制规范</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['pages'],
  data () {
    return {
      select: '用户手册'
    }
  }
}
</script>
<style lang="less" scoped>
.common-nav{
    height: 70px;
    background-color: #fff;
    box-shadow: 0 11px 20px rgba(0,0,0,0.09);
    .common-nav-title{
        .nav-log{
            padding: 0 50px 0 0;
            width: auto;
            height: 80%;
        }
        .nav-input-group{
            position: relative;
            .nav-input-span{
                height: 36px;
                width: 403px;
                padding-right: 43px;
                border: 1px solid #D2D2D2;
                text-indent: 1.2rem;
                font-size: 1.4rem;
            }
            .icon-search:before{
                position: absolute;
                top: 5px;
                right: 10px;
                font-size: 24px;
                color: #666;
            }
        }
        .nav-handbook{
            margin-left: auto;
            .handbook-list-ul{
                .handbook-list-li{
                    display: inline-block;
                    padding: 0 10px;
                    font-size: 14px;
                    line-height: 1.9;
                    cursor: pointer;
                }
                .is-active{
                    color: #21C3E5;
                }
            }
        }
    }
}
</style>
