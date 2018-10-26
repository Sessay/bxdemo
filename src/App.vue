<template>
  <div id="app">
    <CommonTitle :title="title"/>
    <router-link :to="{'name': 'index'}"></router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import CommonTitle from '@/components/common/CommonTitle.vue'
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters({
      theme: 'gettheme'
    })
  },
  methods: {
    ...mapActions([
      'changetheme'
    ])
  },
  created () {
    this.$store.dispatch('changetheme', 'themetwo').then(theme => {
    })
  }
}
</script>

<style lang="less">
@import url("assets/css/common.less");
@import url("assets/css/themeone/common.css");
@import url("http://at.alicdn.com/t/font_889198_p04i5djhl3c.css");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
