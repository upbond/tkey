import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home.vue' 
import About from './views/About.vue' 

Vue.use(Router) // プラグイン（どこでも使える機能）を適用するために記載

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',           // URL 
            component: Home    // 上記URLのときに表示するコンポーネント
        },
        {
            path: '/about',
            component: About
        }
    ]
})