<template>
  <!-- {{recipies}} -->
  <n-list hoverable clickable>
    <RecipeDetail v-for="item, i in recipies" :recipe="item" />
  </n-list>
</template>

<script>
  import { NSpace, NList, NListItem, NThing } from 'naive-ui';
  import RecipeDetail from '@/components/RecipeDetail'

export default {
  components: {
    NSpace,
    NList,
    NListItem,
    NThing,
    RecipeDetail
  },
  props: {
    recipies: {
      type: Array,
      default: () => []
    }
    // setCurrent: {
    //   type: Function
    // }
  },
//   methods: {
//     clickRecipie(id){
//       console.log(id)
//       this.setCurrent(id)
//     }
//   }
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
