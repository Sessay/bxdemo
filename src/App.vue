<template>
  <div id="app">
    <CommonTitle :title="title"/>
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import CommonTitle from '@/components/common/CommonTitle.vue'
import func from './vue-temp/vue-editor-bridge';
export default {
  // name: 'app',
  components: {
    CommonTitle
  },
  data () {
    return {
      title: '测试ceshi'
    }
  },
  computed: {
    theme () {
      return this.$store.state.theme
    }
  },
  methods: {
    change () {
      return new Promise(function(resolve,reject){
        this.$store.commit('changetheme', 'themetwo')
      })
    }
  },
  mounted () {
    this.change().then(function(){
      console.log(this.theme)
    })
  }
}
</script>

<style lang="less">
@import url("assets/css/common.less");
@import url("assets/css/themeone/common.css");
@import url("http://at.alicdn.com/t/font_754783_kftx754jekb.css");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
