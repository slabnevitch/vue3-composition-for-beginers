<template>
  <n-list-item>
    <n-card :title="recipe.title">
    </n-card>
      <n-thing :title="recipe.title" content-style="margin-top: 10px;">
        {{recipe.body}}
      </n-thing>
    </n-list-item>
</template>

<script>
  // import {ref, watch} from 'vue'
  import { NListItem, NThing, NCard } from 'naive-ui';
export default {
  components: {
    NListItem, NThing, NCard
  },
  props: {
    recipe: {
      type: Object,
      default: {
        id: '',
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style>
  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .recipe p {
    font-size: .8rem;
    margin-bottom: .5rem;
  }

  .recipe a, .recipe h2 {
    margin-bottom: .5rem;
  }
</style>
