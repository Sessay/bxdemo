<template>
    <div class="handbook">
        <CommonNav :pages="pages"/>
        <div class="app-content-top handbook-content">
          <div class="app-container">
            <div class="handbook-title">
              <span class="handbook-title-total">全部品牌</span>
              <i class="iconfont icon-right"></i>
              <span class="handbook-title-carstyle">轿车</span>
              <i class="iconfont icon-right"></i>
              <span class="handbook-title-carstyle">GA4(标准型，2TZD+5MT,2WD)</span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import CommonNav from '@/components/common/CommonNav.vue'
export default {
  components: {
    CommonNav
  },
  data () {
    return {
      pages: 'handbook',
      select: 'select'
    }
  }
}
</script>
<style lang="less" scoped>
.handbook{
  .handbook-content{
    background-color: #fff;
    .handbook-title{
      height: 40px;
      line-height: 40px;
      color: #666;
      font-size: 16px;
      display: flex;
      align-items: center;
      &>*{
        padding-right: 5px;
        &:not(i){
          cursor: pointer;
        }
      }
    }
  }
}
</style>
