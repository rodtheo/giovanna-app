<template>
  <section class="header">
    <img src="../assets/Avatar.png" alt="Avatar" />
    <div>
      <input
        type="text"
        v-model="novoItem"
        placeholder="Digite um nome para a nova lista"
      />
      <Button class="btn-principal" @click="adicionarItem">Criar</Button>
    </div>
  </section>
  <h1>Minhas<br />Listas</h1>
  <ul class="lista">
      <li class="item" v-for="(item, index) in itens" :key="index">
<router-link :to="{ path: `/lists/${item.name}` }" :item="item" >
        <h2>{{ item.name }}</h2>
        <div class="align">
          <img class="card" src="../assets/Avatar.png" alt="Avatar" />
          <div class="actions">
            <button class="btn-icon" @click="inserirItem">
              <img class="icon" src="../assets/copy-icon.svg" alt="Copiar" />
              <span>Copiar</span>
            </button>
            <button class="btn-icon" @click="excluirItem(index)">
              <img class="icon" src="../assets/trash-icon.svg" alt="Excluir" />
              <span>Excluir</span>
            </button>
          </div>
        </div>
</router-link>
      </li>
  </ul>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    adicionarItem () {
      this.itens.push(this.novoItem)
    },
    excluirItem (index) {
      this.itens.splice(index, 1)
    },
    inserirItem () {
      const itemCopy = this.novoItem

      this.itens.splice(0, 0, itemCopy)

      this.novoItem = ''
    }
  }
}
</script>

<style scooped>
.btn-icon {
  color: #4c2f15;
  font-size: 13px;
  background: none;
  border: none;
}
.icon {
  width: 32px;
  height: auto;
  display: block;
  margin-bottom: 4px;
}

.lista {
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  margin: 0;
  padding: 0;
}

.item {
  padding: 40px;
  border-radius: 16px;
  border: 4px solid #f29e38;
  background: #f29d38;
  height: auto;
  width: auto;
  list-style-type: none;
  margin-right: 16px;
  min-width: 300px;
}

a {
  text-decoration: none;
  display: flex;
  columns: row;
}

h2 {
  font-size: 40px;
  font-weight: 700;
  color: #402712;
  margin: 0;
  padding: 0;
}

.align {
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.actions {
  display: flex;
  align-items: flex;
}

.header input {
  box-sizing: border-box;
  flex-direction: row;
  padding: 12px 16px;
  width: 358px;
  height: 48px;
  border: 2px solid #4f5902;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #a6998d;
  background-color: #f2ece6;
}
</style>
