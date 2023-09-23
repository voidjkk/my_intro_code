import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "../store";
import HomeView from "../views/HomeView.vue";


//設定路徑相關訊息，要放到實例的router上
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
];
//3.x版本以前用new VueRouter
const router = createRouter({
  //若沒有後端配合，只能用Hash mod實現SPA
  history: createWebHashHistory("/my_intro_demo/"),
//  history: createWebHistory( process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from , next) =>{
  store.commit("PlayingAnimation" , true);
  console.log("網站載入")

  next()
})
//第一次比較久，讓滾動條不要提早出現
let delay = 3000 ;
router.afterEach( ()=>{

  window.scrollTo({
    top: 0,
  });  

  setTimeout( () => {
    store.commit("PlayingAnimation" , false);
    console.log("網站切緩完畢+動畫播完")
     delay = 950 ;
  }, delay );
})


export default router;
