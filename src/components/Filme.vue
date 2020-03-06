<template>
  <div>
    <div>
      <div>
        <h3>Esse é o produto com id {{ $route.params.id }}</h3>
      </div>
      <div class="col-5 my-1">
        <img :src="filme.imagem" alt="image do filme" />
      </div>
      <div class="col-7 mt-1">
        <h1>{{ filme.titulo }}</h1>
        <p v-html="filme.desc"></p>
        <p>{{ filme.valor | formatarPreco("R$") }}</p>
        <router-link
          tag="button"
          :to="{ name: 'editar-filme' }"
        >
          Editar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filme",
  data: function() {
    return {
      filme: {
        id: 3,
        titulo: "Movie 2",
        desc: "Um filme de gringos",
        valor: 40,
        estoqueDesponivel: 4,
        avaliacao: 5,
        imagem:
          "https://moraremportugal.com/wp-content/uploads/2018/06/Bigode-no-Mundial-foto.jpg"
      }
    };
  }
};
</script>
