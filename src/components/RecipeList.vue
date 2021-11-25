<template>
  <div class="list">
    <div v-if="recipies.length">
      <div class="card"
        v-for="recipie in recipies" :key="recipie.id"
        @click="clickRecipie(recipie.id)">
        <h2 class="card-title">{{recipie.title}}</h2>
      </div>
    </div>

    <p v-else class="center">Нет рецептов. Добавьте первый</p>
  </div>
</template>

<script>
export default {
  props: {
    recipies: {
      type: Array,
      default: () => []
    },
    setCurrent: {
      type: Function
    }
  },
  methods: {
    clickRecipie(id){
      console.log(id)
      this.setCurrent(id)
    }
  }
}
</script>

<style>
  .card {
    border-bottom: 1px solid #eee;
    padding: 1rem;
    transition: 300ms all ease;
    cursor: pointer;
    background: #fff;
  }

  .empty {
    padding: 1rem;
    background: #fff!important;
  }

  .card-title {
    padding: 1rem;
    text-align: center;
  }

  .card:hover {
    background: #eee;
  }

  .list {
    background: #fffeee;
  }
</style>
