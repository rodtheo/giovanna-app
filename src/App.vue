<template>
  <nav>
    <router-link to="/">MainListView</router-link>
  </nav>
  <router-view :itens="itens"
  :adicionarItem="adicionarItem"
  :excluirItem="excluirItem"
  :inserirItem="inserirItem"
  :updateMainLists="updateMainLists"
  :duplicateList="duplicateList" />
</template>

<script>

import food from '@/food.json'

export default {
  data () {
    return {
      novoItem: '',
      itens: food
    }
  },
  methods: {
    excluirItem (index) {
      this.itens.splice(index, 1)
    },
    updateMainLists (cartName, cartList) {
      var index = this.itens.map(function (e) { return e.name }).indexOf(cartName)
      this.itens[index].items = cartList
      console.log('cartList: ')
      console.log(this.itens)
    },
    adicionarItem (ListName) {
      this.itens.push({ name: ListName, items: [] })
    },
    duplicateList (list) {
      // const fakeItemCopy = []
      // const itemCopy = Object.assign({}, fakeItemCopy, list.items)
      const itemCopy = JSON.parse(JSON.stringify(list.items))
      const listCopy = { name: list.name + '_copy', items: itemCopy }
      this.itens.splice(0, 0, listCopy)
      console.log('Duplicated: ')
      console.log(this.itens)
    },
    inserirItem () {
      const itemCopy = this.novoItem

      this.itens.splice(0, 0, itemCopy)

      this.novoItem = ''
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
