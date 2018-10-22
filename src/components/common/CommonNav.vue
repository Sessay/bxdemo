<template>
    <div class="common-nav">
        <div class="app-container app-flex-row">
            <img class="nav-log" src="../../assets/images/index_logo.png" />
            <div v-if="pages == 'index'" class="nav-input-group">
                <input class="nav-input-span"/>
                <i class="iconfont icon-search"></i>
            </div>
            <div v-if="pages == 'cartype'" class="nav-input-group">
                <input class="nav-input-span"/>
                <i class="iconfont icon-search"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['pages'],
  mounted () {
    console.log(this.pages)
  }
}
</script>
<style lang="less" scoped>
.common-nav{
    height: 70px;
    background-color: #fff;
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
}
</style>
