<template>
    <div class="index">
        <CommonNav :pages="pages"/>
        <img src="../assets/images/banner.png" class="index-banner"/>
        <div class="app-container index-content">
            <div class="index-content-cartype">
                <div class="index-cartype-name">轿车</div>
                <div class="index-cartype-carstyle">
                    <div class="index-carstyle-group">
                        <router-link :to="{ 'name': 'carstyle' }">
                            <div class="carstyle-group-img carstyle-img-select">
                                <img src="../assets/images/car/carriage/GA4.png"/>
                            </div>
                            <div class="carstyle-group-span">GA4</div>
                        </router-link>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/carriage/GA6.png"/>
                        </div>
                        <div class="carstyle-group-span">GA6</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/carriage/GA8.png"/>
                        </div>
                        <div class="carstyle-group-span">GA8</div>
                    </div>
                </div>
            </div>
            <div class="index-content-cartype">
                <div class="index-cartype-name">SUV</div>
                <div class="index-cartype-carstyle">
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/SUV/GS3.png"/>
                        </div>
                        <div class="carstyle-group-span">GS3</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/SUV/GS4.png"/>
                        </div>
                        <div class="carstyle-group-span">GS4</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/SUV/GS7.png"/>
                        </div>
                        <div class="carstyle-group-span">GS7</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/SUV/GS8.png"/>
                        </div>
                        <div class="carstyle-group-span">GS8</div>
                    </div>
                </div>
            </div>
            <div class="index-content-cartype">
                <div class="index-cartype-name">新能源车</div>
                <div class="index-cartype-carstyle">
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/NewEnergy/GS4PHEV.png"/>
                        </div>
                        <div class="carstyle-group-span">GS4 PHEV</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/NewEnergy/GA3S.png"/>
                        </div>
                        <div class="carstyle-group-span">GA3S PHEV</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/NewEnergy/GE3.png"/>
                        </div>
                        <div class="carstyle-group-span">GE3</div>
                    </div>
                </div>
            </div>
            <div class="index-content-cartype">
                <div class="index-cartype-name">未来概念</div>
                <div class="index-cartype-carstyle">
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/future/E-JET.png"/>
                        </div>
                        <div class="carstyle-group-span">E-JET</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/future/E-LINKER.png"/>
                        </div>
                        <div class="carstyle-group-span">E-LINKER</div>
                    </div>
                    <div class="index-carstyle-group">
                        <div class="carstyle-group-img">
                            <img src="../assets/images/car/future/EVCOUPE.png"/>
                        </div>
                        <div class="carstyle-group-span">EV COUPE</div>
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
      pages: 'index'
    }
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
                    .carstyle-img-select{
                        box-shadow: 1px 1px 15px rgba(0,0,0,0.3);
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
