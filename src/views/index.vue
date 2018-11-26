<template>
    <div class="index">
        <CommonNav :pages="pages"/>
        <img :src="banner" class="index-banner"/>
        <div class="index-content">
            <div class="app-container">
                <div class="index-content-cartype" v-for="items in car" :key="items.id">
                    <div class="index-cartype-name">{{items.name}}</div>
                    <div class="index-cartype-carstyle">
                        <div class="index-carstyle-group" v-for="item in items.children" :key="item.id">
                            <router-link :to="{ name: 'carstyle', query: {'carid': items.id,'styleid': item.id}}">
                                <div class="carstyle-group-img" :class="{'app-img-select':item.active}" @mousedown="outStyle(item)" @mouseover="selectStyle(item)" @mouseout="outStyle(item)">
                                    <img :src="item.img"/>
                                </div>
                                <div class="carstyle-group-span">{{item.name}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import CommonNav from '@/components/common/CommonNav.vue'
import banner from '../assets/images/banner.png'
export default {
  components: {
    CommonNav
  },
  data () {
    return {
      pages: 'index',
      car: '',
      banner
    }
  },
  methods: {
    ...mapActions([
      'setCar'
    ]),
    getData () {
      this.$api.get('http://api.com/index').then(res => {
        this.$store.dispatch('setCar', res.data.car).then(theme => {
          this.car = res.data.car
        })
      })
    },
    selectStyle (item) {
      this.$set(item, 'active', true)
    },
    outStyle (item) {
      this.$delete(item, 'active')
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
