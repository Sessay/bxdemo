<template>
    <div class="index">
        <CommonNav :pages="pages"/>
        <img src="../assets/images/banner.png" class="index-banner"/>
        <div class="app-container index-content">
            <div class="index-content-cartype" v-for="(items,index) in car" :key="index">
                <div class="index-cartype-name">{{items.name}}</div>
                <div class="index-cartype-carstyle">
                    <div class="index-carstyle-group" v-for="item in items.children" :key="item.name">
                        <router-link :to="{ name: 'carstyle', params: {'stylename': items.name,'typename': item.name,'carstyle': items,'cartype': item} }">
                            <div class="carstyle-group-img" :class="{'app-img-select':item.active}" @mouseover="selectStyle(item)" @mouseout="outStyle(item)">
                                <img :src="item.img"/>
                            </div>
                            <div class="carstyle-group-span">{{item.name}}</div>
                        </router-link>
                    </div>
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
      pages: 'index',
      car: ''
    }
  },
  methods: {
    getData () {
      this.$api.get('http://api.com/index').then(res => {
        this.car = res.data.car
        console.log(this.car)
      })
    },
    selectStyle (item) {
      this.$set(item, 'active', true)
    },
    outStyle (item) {
      this.$set(item, 'active', false)
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style lang="less" scoped>
.index{
    .index-banenr{
        height: auto;
        width: 100%;
    }
    .index-content{
        padding: 20px 0;
        .index-content-cartype{
            .index-cartype-name{
                width: 160px;
                height: 35px;
                line-height: 40px;
                font-size: 22px;
                margin-bottom: 10px;
                color: var(--title-themeone-color);
                border-bottom: 2px solid var(--title-themeone-color);
            }
            .index-cartype-carstyle{
                display: flex;
                flex-wrap: wrap;
                .index-carstyle-group{
                    width: 260px;
                    margin: 10px 26.6px;
                    .carstyle-group-img{
                        height: 220px;
                        padding: 10px 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .carstyle-group-span{
                        height: 60px;
                        font-size: 20px;
                        color: #333;
                        padding: 0 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    &:nth-of-type(4n+1){
                        margin-left: 0px;
                    }
                    &:nth-of-type(4n){
                        margin-right: 0px;
                    }
                }
            }
        }
    }
}
</style>
