<template>
  <div class="carstyle">
    <CommonNav :pages="pages"/>
    <div class="app-content-top carstyle-content">
      <div class="app-container">
        <div class="carstyle-title">
          <span class="carstyle-title-total">全部品牌</span>
          <i class="iconfont icon-right"></i>
          <div class="carstyle-title-assemble">
            <div class="carstyle-title-group">
              <span class="carstyle-title-carstyle">轿车</span>
              <i class="iconfont icon-down"></i>
            </div>
            <div class="carstyle-group-children">
              <ul class="carstyle-group-ul">
                <li class="carstyle-group-li">SUV</li>
                <li class="carstyle-group-li">新能源车</li>
                <li class="carstyle-group-li">未来概念</li>
              </ul>
            </div>
          </div>
          <i class="iconfont icon-right"></i>
          <div class="carstyle-title-assemble">
            <div class="carstyle-title-group">
              <span class="carstyle-title-carstyle">GA4</span>
              <i class="iconfont icon-down"></i>
            </div>
            <div class="carstyle-group-children">
              <ul class="carstyle-group-ul">
                <li class="carstyle-group-li">GA3</li>
                <li class="carstyle-group-li">GA7</li>
                <li class="carstyle-group-li">GA8</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="carstyle-years">
          <div class="carstyle-car-years">
            <ul class="carstyle-years-ul">
              <li :class="{'carstyle-car-li years-select':select == 'select'}">2018款</li>
              <li class="carstyle-car-li">2017款</li>
              <li class="carstyle-car-li">2016款</li>
              <li class="carstyle-car-li">2015款</li>
              <li class="carstyle-car-li">2014款</li>
              <li class="carstyle-car-li">2013款</li>
              <li class="carstyle-car-li">2012款</li>
              <li class="carstyle-car-li">2011款</li>
              <li class="carstyle-car-li">2010款</li>
              <li class="carstyle-car-li">2009款</li>
            </ul>
          </div>
          <div class="carstyle-years-more">
            <div class="carstyle-title-assemble">
              <div class="carstyle-title-group">
                <span class="carstyle-title-carstyle">更多</span>
                <div class="carstyle-title-icon">
                  <i class="iconfont icon-up"></i>
                </div>
              </div>
              <div class="carstyle-group-children">
                <ul class="carstyle-group-ul">
                  <li class="carstyle-group-li">2009款</li>
                  <li class="carstyle-group-li">2008款</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="carstyle-cartype">
          <div :class="{'carstyle-cartype-group app-flex-column carstyle-cartype-select':carselect = 'GA4'}">
            <router-link :to="{'name': 'handbook'}">
              <div class="carstyle-cartype-imgroup app-flex-row">
                <img src="../assets/images/car/carriage/GA4.png"/>
              </div>
              <div class="carstyle-cartype-span app-flex-column">
                <div class="carstyle-cartype-name">GA4</div>
                <div class="carstyle-cartype-introdce">标准型，2TZD+5MT,2WD</div>
              </div>
            </router-link>
          </div>
          <div class="carstyle-cartype-group app-flex-column">
            <div class="carstyle-cartype-imgroup app-flex-row">
              <img src="../assets/images/car/carriage/GA4.png"/>
            </div>
            <div class="carstyle-cartype-span app-flex-column">
              <div class="carstyle-cartype-name">GA4</div>
              <div class="carstyle-cartype-introdce">标准型，2TZD+5MT,2WD</div>
            </div>
          </div>
          <div class="carstyle-cartype-group app-flex-column">
            <div class="carstyle-cartype-imgroup app-flex-row">
              <img src="../assets/images/car/carriage/GA4.png"/>
            </div>
            <div class="carstyle-cartype-span app-flex-column">
              <div class="carstyle-cartype-name">GA4</div>
              <div class="carstyle-cartype-introdce">标准型，2TZD+5MT,2WD</div>
            </div>
          </div>
          <div class="carstyle-cartype-group app-flex-column">
            <div class="carstyle-cartype-imgroup app-flex-row">
              <img src="../assets/images/car/carriage/GA4.png"/>
            </div>
            <div class="carstyle-cartype-span app-flex-column">
              <div class="carstyle-cartype-name">GA4</div>
              <div class="carstyle-cartype-introdce">标准型，2TZD+5MT,2WD</div>
            </div>
          </div>
          <div class="carstyle-cartype-group app-flex-column">
            <div class="carstyle-cartype-imgroup app-flex-row">
              <img src="../assets/images/car/carriage/GA4.png"/>
            </div>
            <div class="carstyle-cartype-span app-flex-column">
              <div class="carstyle-cartype-name">GA4</div>
              <div class="carstyle-cartype-introdce">标准型，2TZD+5MT,2WD</div>
            </div>
          </div>
          <div class="carstyle-cartype-group app-flex-column">
            <div class="carstyle-cartype-imgroup app-flex-row">
              <img src="../assets/images/car/carriage/GA4.png"/>
            </div>
            <div class="carstyle-cartype-span app-flex-column">
              <div class="carstyle-cartype-name">GA4</div>
              <div class="carstyle-cartype-introdce">标准型，2TZD+5MT,2WD</div>
            </div>
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
      select: 'select',
      carselect: 'GA4'
    }
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
          width: 108%;
          right: -5px;
          top: 92%;
          border: 1px solid #BFBFBF;
          font-size: 1.2rem;
          display: none;
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
            left: 40%;
            border-width: 0 6px 7px 6px;
            border-color: transparent transparent #fff transparent;
            border-style: solid;
          }
          .carstyle-group-ul{
            padding: 2px;
            .carstyle-group-li{
              line-height: 1.7;
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
      .carstyle-cartype-select{
        box-shadow: 1px 1px 20px rgba(0,0,0,0.3);
      }
    }
  }
}
</style>
