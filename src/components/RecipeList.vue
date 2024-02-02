<template>
  <!-- {{recipies}} -->
  <n-button @click="customPropClick">change customProp</n-button>
  <n-list>
    <RecipeDetail v-for="item, i in recipies" :key="item.id" :recipe="item" @remove="postRemoveFromList"/>
  </n-list>
</template>

<script>
  import { NSpace, NList, NListItem, NThing, NButton } from 'naive-ui';
  import RecipeDetail from '@/components/RecipeDetail'

export default {
  components: {
    NSpace,
    NList,
    NListItem,
    NThing,
    RecipeDetail,
    NButton
  },
  props: {
    recipies: {
      type: Array,
      default: () => []
    },
    customProp: {
      type: Number,
      default: 0
    }
    // setCurrent: {
    //   type: Function
    // }
  },
  methods: {
    postRemoveFromList(removedPost){
      this.$emit('remove', removedPost);
    },
    customPropClick(){
      this.customProp + 1;
      console.log(this.customProp);
      this.$emit('update:customProp', this.customProp);
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
