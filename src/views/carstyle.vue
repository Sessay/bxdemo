<template>
  <div class="carstyle">
    <CommonNav :pages="pages"/>
    <div class="app-content-top carstyle-content">
      <div class="app-container">
        <div class="carstyle-title">
          <span class="carstyle-title-total">全部品牌</span>
          <i class="iconfont icon-right"></i>
          <div class="carstyle-title-assemble" @click="carShow('styleShow')">
            <div class="carstyle-title-group">
              <span class="carstyle-title-carstyle">{{caritem.name}}</span>
              <i class="iconfont icon-down" v-if="carsiblings.length > 1 && !styleShow"></i>
              <i class="iconfont icon-up" v-if="carsiblings.length > 1 && styleShow"></i>
            </div>
            <div class="carstyle-group-children" v-show="styleShow" v-if="carsiblings.length > 1">
              <ul class="carstyle-group-ul">
                <li class="carstyle-group-li" v-for="item in car" :key="item.id" @click="changeStyle(item,item.id)" v-show="item.id !== carid">{{item.name}}</li>
              </ul>
            </div>
          </div>
          <i class="iconfont icon-right"></i>
          <div class="carstyle-title-assemble" @click="carShow('typeShow')">
            <div class="carstyle-title-group">
              <span class="carstyle-title-carstyle">{{childitem.name}}</span>
              <i class="iconfont icon-down" v-if="childsiblings.length > 0 && !typeShow"></i>
              <i class="iconfont icon-up" v-if="childsiblings.length && typeShow> 0"></i>
            </div>
            <div class="carstyle-group-children" v-show="typeShow" v-if="childsiblings.length > 0">
              <ul class="carstyle-group-ul">
                <li class="carstyle-group-li" v-for="item in childsiblings" :key="item.id" @click="changeType(item, item.id)">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="carstyle-years">
          <div class="carstyle-car-years">
            <ul class="carstyle-years-ul">
              <li class="carstyle-car-li" v-for="(item,index) in judgeLength(styleitem)" :class="{'years-select':select == index}" :key="item.years" @click="changeYears('mainitem',item,index)">{{item.years}}</li>
            </ul>
          </div>
          <div class="carstyle-years-more" v-if="styleitem.length > 9 && childyears != ''">
            <div class="carstyle-title-assemble" @click="carShow('moreShow')">
              <div class="carstyle-title-group">
                <span class="carstyle-title-carstyle">更多</span>
                <i class="iconfont icon-down"></i>
              </div>
              <div class="carstyle-group-children" v-show="moreShow">
                <ul class="carstyle-group-ul">
                  <li class="carstyle-group-li" v-for="(item,index) in childyears" :class="{'years-select':yearselect == index}" :key="item.years" @click="changeYears('childitem',item,index)">{{item.years}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="carstyle-cartype">
          <div class="carstyle-cartype-group app-flex-column" v-for="(item,index) in styleyears" :class="{'app-img-select':item.active}" @mousedown="outStyle(item)" @mouseover="selectStyle(item)" @mouseout="outStyle(item)" :key="index">
            <router-link :to="{'name': 'handbook'}">
              <div class="carstyle-cartype-imgroup app-flex-row">
                <img :src="item.img"/>
              </div>
              <div class="carstyle-cartype-span app-flex-column">
                <div class="carstyle-cartype-name">{{item.name}}</div>
                <div class="carstyle-cartype-introdce">{{item.introdce}}</div>
              </div>
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
      pages: 'carstyle',
      select: 0,
      yearselect: null,
      carid: this.$route.query.carid,
      styleid: this.$route.query.styleid,
      car: '',
      caritem: '',
      childitem: '',
      carsiblings: '',
      childsiblings: '',
      styleitem: '',
      styleyears: '',
      childyears: [],
      styleShow: false,
      typeShow: false,
      moreShow: false
    }
  },
  watch: {
    caritem () {
      this.carsiblings = this.notId(this.car, this.carid)
      this.childitem = this.chooseId(this.caritem.children, this.styleid)
    },
    childitem () {
      this.childsiblings = this.notId(this.caritem.children, this.styleid)
      this.styleitem = this.childitem.children
      console.log(this.styleitem)
      this.select = 0
      this.styleyears = this.styleitem[this.select].children
    }
  },
  methods: {
    getCar () {
      // 处理请求数据
      this.car = JSON.parse(this.$localStorage.get('car'))
      this.caritem = this.chooseId(this.car, this.carid)
    },
    changeStyle (item, itemid) {
      this.carid = itemid
      this.styleid = this.carid + '.1'
      this.caritem = item
      this.$router.push({ path: '/carstyle', query: { 'carid': this.carid, 'styleid': this.styleid } })
    },
    changeType (item, itemid) {
      this.childitem = item
      this.styleid = itemid
      this.$router.push({ path: '/carstyle', query: { 'carid': this.carid, 'styleid': this.styleid } })
    },
    changeYears (itemtype, item, index) {
      // 改变选中项
      if (itemtype === 'mainitem') {
        this.select = index
        this.yearselect = null
      } else if (itemtype === 'childitem') {
        this.yearselect = index
        this.select = null
      }
      this.styleyears = item.children
    },
    removeArray (array, index) {
      // 移除数组中不需要的项
      if (index <= array.length - 1) {
        for (let i = index; i < array.length; i++) {
          array[i] = array[i + 1]
        }
      } else {
        throw new Error('超出最大索引！')
      }
      array.length -= 1
      return array
    },
    carShow (item) {
      // 选择车系车型年份
      if (item === 'styleShow') {
        this.styleShow = !this.styleShow
      } else if (item === 'typeShow') {
        this.typeShow = !this.typeShow
      } else if (item === 'moreShow') {
        this.moreShow = !this.moreShow
      }
    },
    judgeLength (item) {
      // 判断子长度并截取
      if (item.length > 9) {
        let j = 0
        for (let i = 9; i < item.length; i++) {
          this.childyears[j] = item[i]
          j++
        }
      }
      return item
    },
    selectStyle (item) {
      this.$set(item, 'active', true)
    },
    outStyle (item) {
      this.$delete(item, 'active')
    },
    chooseId (array, id) {
      console.log('array')
      console.log(array)
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          return array[i]
        }
      }
    },
    notId (array, id) {
      let arr = []
      let j = 0
      for (let i = 0; i < array.length; i++) {
        if (array[i].id !== id) {
          arr[j] = array[i]
          j++
        }
      }
      return arr
    }
  },
  created () {
    this.getCar()
  }
}
</script>
<style lang="less" scoped>
.carstyle{
  .carstyle-content{
    background-color: #fff;
    .carstyle-title{
      height: 40px;
      line-height: 40px;
      color: #666;
      font-size: 16px;
      display: flex;
      align-items: center;
      .carstyle-title-total{
        cursor: pointer;
        padding-right: 5px;
      }
    }
    .carstyle-title-assemble{
        position: relative;
        padding: 0 5px;
        .carstyle-title-group{
          height: 100%;
          position: relative;
          &>*{
            cursor: pointer;
          }
          .carstyle-title-carstyle{
            padding-right: 5px;
          }
          .iconfont{
            font-size: 12px;
            font-weight: bold;
          }
        }
        .carstyle-group-children{
          position: absolute;
          background: #fff;
          color: #666;
          min-width: 108%;
          right: -5px;
          top: 92%;
          border: 1px solid #BFBFBF;
          font-size: 1.2rem;
          &::before{
            position: absolute;
            content: '';
            display: inline-block;
            bottom: 100%;
            left: 40%;
            border-width: 0 6px 8px 6px;
            border-color: transparent transparent #BFBFBF transparent;
            border-style: solid;
          }
          &::after{
            position: absolute;
            content: '';
            display: inline-block;
            bottom: 99%;
            left: 41%;
            border-width: 0 5px 6.6px 5px;
            border-color: transparent transparent #fff transparent;
            border-style: solid;
          }
          .carstyle-group-ul{
            padding: 2px;
            .carstyle-group-li{
              line-height: 1.7;
              white-space: nowrap;
              cursor: pointer;
            }
          }
        }
    }
    .carstyle-years{
      background: #7E93A6;
      height: 34px;
      color: #fff;
      line-height: 34px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      .carstyle-car-years{
        width: 1008px;
        overflow: hidden;
        .carstyle-car-li{
          padding: 0 30px;
          display: inline-block;
          cursor: pointer;
        }
      }
      .carstyle-years-more{
        padding-right: 30px;
        .carstyle-group-children{
          top: 110%;
          &::before{
            border-width: 0 3px 4px 3px;
          }
          &::after{
            border-width: 0 3px 2px 3px;
          }
        }
      }
      .years-select{
        background-color: #344350;
        color: #fff;
      }
    }
    .carstyle-cartype{
      display: flex;
      flex-wrap: wrap;
      .carstyle-cartype-group{
        width: 230px;
        padding: 15px;
        margin: 20px;
        .carstyle-cartype-imgroup{
          height: 180px;
        }
        .carstyle-cartype-span{
          font-size: 16px;
          align-items: center;
          line-height: 1.7;
        }
      }
    }
  }
}
</style>
