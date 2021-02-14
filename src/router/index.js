import Vue from 'vue'
import VueRouter from 'vue-router'

import NavRoutes from './nav'
import NavSearch from '@/components/Nav/NavSearch'
import Search from '@/components/Search/Search'
import SingerList from '@/views/Singer/SingerList'
import SongDetails from '@/views/Common/SongDetails'
import SingerInfo from '@/views/Singer/SingerInfo'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err=>err);
}

const routes =[
  ...NavRoutes,
  {
    path:"/search",
    name:"Search",
    components:{
      default:Search,
      nav:NavSearch
    }
  },
  {
    path:"/singer/list/:singerId",
    name:"SingerList",
    components:{
      default:SingerList,
      nav:NavSearch
    }
  },
  {
    path:"/song/details/:songName/:songId",
    name:"SongDetails",
    components:{
      default:SongDetails,
      nav:NavSearch
    }
  },
  {
    path:"/singer/info/:infoId",
    name:"SingerInfo",
    components:{
      default:SingerInfo
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
