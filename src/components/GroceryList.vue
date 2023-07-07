<template>
  <section class="header-GL">
    <button class="btn-icon-GL">
      <img class="icon-GL" src="../assets/back-icon.svg" alt="Voltar" />
      <span class="back">Voltar</span>
    </button>
  </section>
  <section class="main">
    <section class="column-left">
      <h3 class="other-color">Adicionar Item</h3>
      <div class="form">
        <div>
          <label for="produto">Produto</label>
          <input id="produto" type="text" placeholder="Nome do produto" />
        </div>
        <div class="form-item">
          <label for="quantidade">Quantidade</label>
          <input
            id="quantidade"
            type="text"
            placeholder="Quantidade e a unidade de medida"
          />
        </div>
        <div class="form-item">
          <label for="imagem">Imagem</label>
          <input
            id="imagem"
            type="text"
            placeholder="Url da imagem do produto"
          />
        </div>
        <div class="form-item">
          <label for="marca">Marca</label>
          <input
            id="marca"
            type="text"
            placeholder="Marca do produto, se houver"
          />
        </div>
        <div class="form-item">
          <label for="embalagem">Embalagem</label>
          <input
            id="embalagem"
            type="text"
            placeholder="Tamanho da embalagem, se houver"
          />
        </div>
        <div class="form-item">
          <label for="obs">Observação</label>
          <input id="obs" type="text" />
        </div>
      </div>
      <button class="add">Adicionar</button>
    </section>
    <section class="column-right">
      <h3>Lista de Compras</h3>
      <div>
        <input class="search" type="search" placeholder="Buscar" />
        <Button class="btn-principal-II">Pesquisar</Button>
      </div>
      <ul>
        <li>
          <div class="line-top">
            <input type="checkbox" id="scales" name="scales" checked />
            <div class="line-top-inside">
              <img class="icon-GL" src="../assets/mamao.png" alt="Img" />
              <div>
                <p>Produto</p>
                <p>Quantidade</p>
              </div>
              <div>
                <p>Marca</p>
                <p>Embalagem</p>
              </div>
            </div>
          </div>
          <div>
            <p>Observação</p>
          </div>
          <div>
            <button class="btn-icon-GL">
              <img
                class="icon-GL"
                src="../assets/edit-solid.svg"
                alt="Editar"
              />
            </button>
            <button class="btn-icon-GL">
              <img
                class="icon-GL"
                src="../assets/exchange-alt-solid.svg"
                alt="Mover"
              />
            </button>
            <button class="btn-icon-GL">
              <img
                class="icon-GL"
                src="../assets/trash-alt.svg"
                alt="Remover"
              />
            </button>
          </div>
        </li>
      </ul>
      <h4>Itens não necessários desta vez</h4>
      <ul>
        <li></li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  props: ['itens'],
  mounted: function () {
    console.log('me da um ola')
    console.log(this.itens)
  }
}
</script>

<style scooped>
ul {
  list-style-type: none;
}
.main {
  display: flex;
}

.column-left {
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background: #734720;
  width: 392px;
}
.column-right {
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  width: 816px;
  margin-left: 32px;
}
.header-GL {
  margin-bottom: 48px;
}
.btn-icon-GL {
  align-items: center;
  display: flex;
  border: none;
  background: none;
}
.icon-GL {
  display: flex;
  align-items: center;
  width: 32px;
  height: auto;
}
.back {
  color: #4f5902;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  align-items: center;
  padding-left: 8px;
}
label {
  display: block;
  color: #f2ece6;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
}
.search {
  width: 618px;
}
.btn-principal-II {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  margin-left: 8px;
  background: #4f5902;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #f2ece6;
  border: none;
}

.add {
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: #bf7d2c;
  color: #f2ece6;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  border: none;
  margin-top: 32px;
}
.other-color {
  color: #f29e38;
}

h3 {
  color: #734720;
  font-size: 33px;
  font-weight: 700;
  line-height: 120%;
  margin-top: 0px;
  padding-top: 0px;
}

h4 {
  color: #734720;
  font-size: 28px;
  font-weight: 700;
  line-height: 120%;
}

.form-item {
  margin-top: 16px;
}

.form input {
  padding: 12px 16px;
  width: 344px;
  background: none;
  border-radius: 8px;
  border: 2px solid #f2ece6;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #f2ece6;
}

.form input::placeholder {
  color: #a6998d;
}

.form label {
  margin-bottom: 8px;
}

.column-right input {
  box-sizing: border-box;
  flex-direction: row;
  padding: 12px 16px;
  height: 48px;
  border: 2px solid #4f5902;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #4f5902;
  background-color: #f2ece6;
}

.line-top {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}
.line-top-inside {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}
.line-top-inside img {
  width: 74px;
  height: 74px;
  border-radius: 4px;
}
</style>
