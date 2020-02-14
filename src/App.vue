<template>
  <div id="app">
    <div class="container">
      <h1>{{title}}</h1>
      <h3 v-if=" horas >=9 && horas < 17" id="abreto">ABERTA</h3>
      <h3 v-else-if="horas >=17 && horas < 18" id="proximo-fechar">PRÓXIMO DE FECHAR</h3>
      <h3 v-else id="fechado">FECHADA</h3>

      <div class="row">
        <div class="col">
          <h2>Filmes Encotrados</h2>
        </div>
      </div>
      <!-- <div class="col-3">
        <div class="card">
          <img class="card-img-top" alt="imagem filme">
          <div class="card-body">
            <h5 class="card-title">Vinfadores</h5>
            <p class="card-text">Um filme de heróis</p>
            <p class="card-text">R$ 25,00</p>
            <a href="#" class="btn btn-primary">Alugar</a>
          </div>
        </div>
      </div> -->
      <div class="card-columns">
        <div class="card" v-bind:key="filme.id" v-for="filme in filmes">
          <img v-bind:src="filme.imagem" class="card-img-top" alt="imagem filme">
          <div class="card-body">
            <h5 class="card-title">{{filme.titulo}}</h5>
            <!-- <p class="card-text">{{filme.desc}}</p> -->
            <p class="card-text" v-html="filme.desc"></p>
            <p class="card-text">{{filme.valor | formatarPreco("R$")}}</p>
            <a href="#" class="btn btn-primary">Alugar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data: function(){
    return{
      title: "Bem vindo a Locadora de Filmes",
      horas: new Date().getHours,
      orc_image:"",
      filmes:[
        {id: 1, titulo: "Vingadores", desc: "Um <b>filme</b> de heróis", valor: 25, imagem: "https://streetfighter.com/wp-content/uploads/2018/03/sf30-boxart-1.png"},
        {id: 2, titulo: "Filme 1", desc: "Um filme tutu", valor: 15, imagem: "https://img.estadao.com.br/fotos/crop/600x400/resources/jpg/5/5/1453287677855.jpg"},
        {id: 3, titulo: "Movie 2", desc: "Um filme de gringos", valor: 40, imagem: "https://moraremportugal.com/wp-content/uploads/2018/06/Bigode-no-Mundial-foto.jpg"},
        {id: 4, titulo: "Oas", desc: "Um filme de filme", valor: 6, imagem: "https://img.freepik.com/vetores-gratis/3d-ilustracao-realistica-do-clapperboard-ou-do-badalo-do-filme-aberto-isolado-no-fundo_1441-1783.jpg?size=338&ext=jpg"}
      ],
      carrinho:[]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#abreto{
  color: blue
}
#proximo-fechar{
  color: orange
}
#fechado{
  color: red
}
.card{
  display:block
}
</style>
