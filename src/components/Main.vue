<template>
  <div id="main">
    <div class="container">
      <h1>{{ title }}</h1>
      <h3 v-if="horas >= 9 && horas < 17" id="abreto">ABERTA</h3>
      <h3 v-else-if="horas >= 17 && horas < 18" id="proximo-fechar">
        PRÓXIMO DE FECHAR
      </h3>
      <h3 v-else id="fechado">FECHADA</h3>

      <div class="row">
        <div class="col">
          <h2>Filmes Encotrados</h2>
          <router-link
            tag="button"
            class="btn btn-primary btn-lg"
            :to="{ name: 'form'}"
          >
            Carrinho {{quantidadeItensCarrinho}}</router-link>
          <!-- <button
            @click="mostrarCarrinho"
            type="button"
            class="btn btn-primary btn-lg"
          >Carrinho {{quantidadeItensCarrinho}}</button> -->
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
      </div>-->
      <div v-if="mostrarFilmes" class="card-columns">
        <div class="card" v-bind:key="filme.id" v-for="filme in filmeOrdenados">
          <!-- <CartaoFilme :filme="filme" /> -->
          <img
            v-bind:src="filme.imagem"
            class="card-img-top"
            alt="imagem filme"
          />
          <div class="card-body">
            <!-- <h5 class="card-title">{{filme.titulo}}</h5> -->
            <router-link
              tag="h5"
              class="card-title"
              :to="{ name: 'filme', params: { id: filme.id } }"
            >
              {{ filme.titulo }}</router-link
            >
            <p class="card-text" v-html="filme.desc"></p>
            <span class="mensagem-estoque" v-if="filme.estoqueDesponivel <= 0">
              Indisponivel
            </span>
            <span
              class="mensagem-estoque"
              v-else-if="filme.estoqueDesponivel < 5"
            >
              Apenas {{ filme.estoqueDesponivel }} itens em estoque
            </span>
            <span class="mensagem-estoque" v-else>
              Aluge agora!
            </span>
            <p class="card-text">{{ filme.valor | formatarPreco("R$") }}</p>
            <div class="avaliacao">
              <span
                v-for="n in 5"
                :key="n"
                v-bind:class="{
                  'avaliacao-active': checharAvaliacao(n, filme)
                }"
              >
                <img
                  src="../assets/etapa4ffcb_img038.jpg"
                  alt="estrela vazia"
                  height="20"
                />
              </span>
            </div>
            <a
              href="#"
              v-if="filme.estoqueDesponivel > 0"
              @click="adicionarAoCarrinho(filme)"
              class="btn btn-primary"
              >Alugar</a
            >
            <a href="#" v-else class="btn btn-primary disabled">Alugar</a>
          </div>
        </div>
      </div>
      <div v-else>
        <Carrinho />
        <!-- <h2>Carrinho</h2> -->
      </div>
    </div>
  </div>
</template>

<script>
import Carrinho from "./Carrinho.vue";
//import CartaoFilme from "./components/CartaoFilme.vue";

export default {
  name: "Main",
  components: {
    Carrinho //,CartaoFilme
  },
  data: function() {
    return {
      title: "Bem vindo a Locadora de Filmes",
      horas: new Date().getHours,
      orc_image: "",
      filmes: [
        {
          id: 1,
          titulo: "Vingadores",
          desc: "Um <b>filme</b> de heróis",
          valor: 25,
          estoqueDesponivel: 4,
          avaliacao: 2,
          imagem:
            "https://streetfighter.com/wp-content/uploads/2018/03/sf30-boxart-1.png"
        },
        {
          id: 2,
          titulo: "Filme 1",
          desc: "Um filme tutu",
          valor: 15,
          estoqueDesponivel: 2,
          avaliacao: 4,
          imagem:
            "https://img.estadao.com.br/fotos/crop/600x400/resources/jpg/5/5/1453287677855.jpg"
        },
        {
          id: 3,
          titulo: "Movie 2",
          desc: "Um filme de gringos",
          valor: 40,
          estoqueDesponivel: 4,
          avaliacao: 5,
          imagem:
            "https://moraremportugal.com/wp-content/uploads/2018/06/Bigode-no-Mundial-foto.jpg"
        },
        {
          id: 4,
          titulo: "Oas",
          desc: "Um filme de filme",
          valor: 6,
          estoqueDesponivel: 8,
          avaliacao: 3,
          imagem:
            "https://img.freepik.com/vetores-gratis/3d-ilustracao-realistica-do-clapperboard-ou-do-badalo-do-filme-aberto-isolado-no-fundo_1441-1783.jpg?size=338&ext=jpg"
        }
      ],
      carrinho: [],
      mostrarFilmes: true,
      mostrarTop5Filmes: false
    };
  },
  methods: {
    adicionarAoCarrinho: function(filme) {
      this.carrinho.push(filme.id);
      for (let i in this.filmes) {
        if (this.filmes[i].id == filme.id) {
          this.filmes[i].estoqueDesponivel =
            this.filmes[i].estoqueDesponivel - 1;
          //console.log( this.filmes[i].estoqueDesponivel );
        }
      }
    },
    // mostrarCarrinho: function() {
    //   //this.mostrarFilmes = !this.mostrarFilmes;
    //   this.$router.push({name:'form'});
    // },
    checharAvaliacao: function(n, filme) {
      return filme.avaliacao - n >= 0;
    }
  },
  computed: {
    quantidadeItensCarrinho: function() {
      return this.carrinho.length;
    },
    filmeOrdenados: function() {
      let filmesOrd = this.filmes;
      filmesOrd.sort(function(a, b) {
        if (a.titulo > b.titulo) {
          return 1;
        }
        if (a.titulo < b.titulo) {
          return -1;
        }
        return 0;
      });
      return this.filmes;
    },
    mostrar5Estrelas: function() {
      !this.mostrarTop5Filmes;
      if (this.mostrarTop5Filmes) {
        let top5Filmes = [];
        for (let filme of this.filmes) {
          if (filme.avaliacao >= 5) top5Filmes.push(filme);
        }
        return top5Filmes;
      }
      return null;
    }
  }
};
</script>

<style>
span.avaliacao-active {
  background-image: url("../assets/etapa4ffcb_img039.jpg");
  background-repeat: no-repeat;
  background-position-x: 1px;
  background-position-y: 2px;
  background-size: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#abreto {
  color: blue;
}
#proximo-fechar {
  color: orange;
}
#fechado {
  color: red;
}
.card {
  display: block;
}
</style>
