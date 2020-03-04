import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Main from "./components/Main.vue";
import Carrinho from "./components/Carrinho.vue";

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'main',
            component:Main
        },
        {
            path:'/form',
            name:'form',
            component:Carrinho
        }
    ]
});