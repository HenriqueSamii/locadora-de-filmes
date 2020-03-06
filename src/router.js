import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Main from "./components/Main.vue";
import Carrinho from "./components/Carrinho.vue";
import Filme from "./components/Filme.vue";
import EditarFilme from "./components/EditarFilme.vue";

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
        },
        {
            path:'/filme/:id',
            name:'filme',
            component:Filme,
            children:[
                {
                    path:'edit',
                    name:'editar-filme',
                    component:EditarFilme
                }
            ]
        }
    ]
});