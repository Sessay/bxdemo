<template>
  <div id="app">
    <CommonTitle :title="title"/>
    <CommonNav :pages="pages"/>
    <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>
<script>
import CommonTitle from '@/components/common/CommonTitle.vue'
import CommonNav from '@/components/common/CommonNav.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  // name: 'app',
  components: {
    CommonTitle,
    CommonNav
  },
  data () {
    return {
      title: '测试ceshi',
      pages: 'index'
    }
  },
  computed: {
    ...mapGetters({
      theme: 'gettheme'
    })
  },
  methods: {
    ...mapActions([
      'changetheme'
    ])
  },
  beforeCreate () {
    this.$store.dispatch('changetheme', 'themetwo').then(theme => {
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
