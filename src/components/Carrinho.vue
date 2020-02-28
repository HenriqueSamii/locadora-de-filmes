<template>
  <div class="carrinho">
    <h2>Carrinho</h2>

    <form>
      <!-- Primeiro Nome -->
      <div class="form-group">
        <label for="primeiroNome">Primeiro Nome</label>
        <input
          type="text"
          class="form-control"
          id="primeiroNome"
          placeholder="Desgite seu primeiro nome"
          v-model.trim.lazy="pedido.primeiroNome"
        />
      </div>

      <!-- Ultimo Nome -->
      <div class="form-group">
        <label for="ultimoNome">Último Nome</label>
        <input
          type="text"
          class="form-control"
          id="ultimoNome"
          placeholder="Desgite seu último nome"
          v-model.trim.lazy="pedido.ultimoNome"
        />
      </div>

      <!-- Endereco -->
      <div class="form-group">
        <label for="endereco">Endereço</label>
        <input type="text" class="form-control" id="endereco" placeholder="Desgite o seu endereço" v-model.trim.lazy="pedido.endereco" />
      </div>

      <!-- Cidade -->
      <div class="form-group">
        <label for="cidade">Cidade</label>
        <input type="text" 
        class="form-control" 
        id="cidade" 
        placeholder="Desgite a sua cidade"
        v-model.trim.lazy="pedido.cidade" />
      </div>

      <!-- Estado DropDown -->
      <div class="form-group">
        <label for="estado">Estado</label>
        <select class="form-control" id="estado" v-model.trim.lazy="pedido.estado">
          <option disabled value>Escolha um estado</option>
          <option v-for="(estado,key) in estados" v-bind:estado="estado" v-bind:key="key">{{estado}}</option>
        </select>
      </div>

      <!-- Cep -->
      <div class="form-group">
        <label for="cep">CEP</label>
        <input type="text" class="form-control" id="cep" placeholder="Desgite o seu CEP"
        v-model.trim.lazy="pedido.cep" />
      </div>

      <!-- Check Box -->
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="pagoNaEntrega" v-model.trim.lazy="pedido.pagoNaEntrega" />
        <label class="form-check-label" for="pagoNaEntrega">Pago na entrega?</label>
      </div>

      <!-- Radio -->
      <div class="custom-radio">
        <label class="radio-inline">
          <input type="radio" name="optradio" value="Manhã" checked v-model.trim.lazy="pedido.entrega" />Manhã
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio" value="Tarde" v-model.trim.lazy="pedido.entrega" />Tarde
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio" value="Noite" v-model.trim.lazy="pedido.entrega" />Noite
        </label>
      </div>

      <!-- Submit -->
      <button type="submit" class="btn btn-primary">Finalizar Pedido</button>
    </form>

    <div>
      <pre>
            Primeiro Nome: {{pedido.primeiroNome}}
            Ultimo Nome: {{pedido.ultimoNome}}
            Endereço: {{pedido.endereco}}
            Cidade: {{pedido.cidade}}
            Estado: {{pedido.estado}}
            CEP: {{pedido.cep}}
            Pago Na Entrega: {{pedido.pagoNaEntrega}}
            Entrega: {{pedido.entrega}}
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carrihno",
  //   props: {
  //     msg: String
  //   },
  data() {
    return {
      pedido: {
          primeiroNome:"",
          ultimoNome:"",
          endereco:"",
          cidade:"",
          estado:"",
          cep:"",
          pagoNaEntrega:false,
          entrega:"Manhã"
      },
      estados: {
        RJ: "Rio de Janeiro",
        Mg: "Minas Gerais",
        Sp: "São Paulo",
        ES: "Espirito Santo"
      }
    };
  }
};
</script>




