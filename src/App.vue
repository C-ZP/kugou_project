<template>
  <div id="app">
    <header>
      <mt-header title="">
        <router-link to="/" slot="left">
          <mt-button class="logo_icon"></mt-button>
        </router-link>
        <mt-button icon="search" slot="right" @touchstart.native="gotoSearch"></mt-button>
      </mt-header>

      <router-view name="nav"></router-view>
    </header>
    <div class="containers">
      <router-view></router-view>
    </div>
    <!-- <play-bottom></play-bottom> -->
  </div>
</template>
<script>
import Vue from 'vue'
import {Header,Button} from 'mint-ui'
Vue.component(Button.name,Button);
Vue.component(Header.name,Header);
// import playBottom from '@/components/PlayBottom/PlayBottom'
export default {
  methods:{
    gotoSearch(){
      this.$router.push({path:'/search'})
    }
  }
}
</script>
<style lang="less">
  header{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    .mint-header{
      .mint-header-button{
        .logo_icon{
          width:5.1rem;
          height:1.2rem;
          background: url(./assets/img/logo.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      .mintui-search{
        font-size: .9rem;
      }
    }
  }
  div.containers{
    margin-top: 4.5rem;
    // margin-bottom: 3.5rem;
  }
</style>
