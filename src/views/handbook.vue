<template>
    <div class="handbook app-flex-column">
        <CommonNav :pages="pages"/>
        <div class="app-content-top handbook-content">
          <div class="app-container app-flex-column">
            <div class="handbook-title">
              <span class="handbook-title-total">全部品牌</span>
              <i class="iconfont icon-right"></i>
              <span class="handbook-title-carstyle handbook-title-cursor" @click="$router.go(-1)">{{carname}}</span>
              <i class="iconfont icon-right"></i>
              <span class="handbook-title-carstyle">{{cartype}}</span>
            </div>
            <div class="handbook-main app-flex-row">
              <div class="handbook-main-left"></div>
              <div class="handbook-main-right"></div>
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
      select: 'select',
      carname: this.$route.query.carname,
      cartype: this.$route.query.cartype
    }
  },
  created () {

  }
}
</script>
<style lang="less" scoped>
.handbook{
  flex: 1;
  .handbook-content{
    background-color: #fff;
    flex: 1;
    .handbook-title{
      height: 40px;
      line-height: 40px;
      color: #666;
      font-size: 16px;
      display: flex;
      align-items: center;
      &>*{
        padding-right: 5px;
      }
      .handbook-title-cursor{
        cursor: pointer;
      }
    }
    .handbook-main{
      flex: 1;
      padding: 10px 0 20px;
      &>*{
        height: 100%;
        box-shadow: 1px 1px 15px rgba(34, 34, 34, 0.27);
      }
      .handbook-main-left{
        margin-right: 20px;
        width: 240px;
        flex: 0 0 240px;
      }

      .handbook-main-right{
        width: 940px;
        flex: 0 0 950px;
      }
    }
  }
}
</style>
