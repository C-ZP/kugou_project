import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    state:{
      titleData:"搜索",
      hash:"",
      songlists:[]
    },
  },
  mutations: {
    changeTitle(state,{title}){
      state.titleData=title;
    }
    
  },
  
  actions: {

  },
  modules:{
    
  }
})
