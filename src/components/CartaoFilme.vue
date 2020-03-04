<template>
  <div>
    <img v-bind:src="filme.imagem" class="card-img-top" alt="imagem filme" />
    <div class="card-body">
      <h5 class="card-title">{{ filme.titulo }}</h5>
      <!-- <p class="card-text">{{filme.desc}}</p> -->
      <p class="card-text" v-html="filme.desc"></p>
      <span class="mensagem-estoque" v-if="filme.estoqueDesponivel <= 0">
        Indisponivel
      </span>
      <span class="mensagem-estoque" v-else-if="filme.estoqueDesponivel < 5">
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
          v-bind:class="{ 'avaliacao-active': checharAvaliacao(n, filme) }"
        >
          <img
            src="./assets/etapa4ffcb_img038.jpg"
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
</template>

<script>
export default {
  name: "CartaoFilme",
  props: {
    filme: Object
  }
};
</script>
