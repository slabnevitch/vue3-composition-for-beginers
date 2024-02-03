<template>
  <!-- <div>
    
  </div>
  <n-button @click="customPropClick">change customProp</n-button>
  <n-button>{{customProp}}</n-button> -->
  
  <n-divider v-if="recipies.length > 0" dashed>
    Comments
  </n-divider>
  
  <n-list v-if="recipies.length > 0">
    <n-select v-model:value="selectValue" :options="options" placeholder="Сортировка" />
    <RecipeDetail v-for="item, i in sortedRcipies" :key="item.id" :recipe="item" @remove="postRemoveFromList"/>
  </n-list>

  <n-divider  v-else dashed>
    Нет записей
  </n-divider>
 
</template>

<script>
  import { NSpace, NList, NListItem, NThing, NButton, NDivider, NSelect } from 'naive-ui';
  import RecipeDetail from '@/components/RecipeDetail'

export default {
  components: {
    NSpace,
    NList,
    NListItem,
    NThing,
    RecipeDetail,
    NButton, 
    NDivider,
    NSelect
  },
  props: {
    recipies: {
      type: Array,
      required: true,
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
  emits: [
    'remove',
    'update:customProp'
  ],
  data(){
    return{
      selectValue: null,
      options: [
        {
          label: "По заголовку",
          value: "title"
        },
        {
          label: "По содержанию",
          value: "body"
        },
        {
          label: "По идентификатору",
          value: "id"
        }
      ]
    }
  },
  methods: {
    postRemoveFromList(removedPost){
      this.$emit('remove', removedPost);
    },
    customPropClick(){
      let newProp = this.customProp + 1;
      console.log(this.customProp + 1);
      this.$emit('update:customProp',  this.customProp + 1);
    }
    // selchange(){
    //   console.log('slect!')
    // }
  },
  computed: {
    sortedRcipies(){
      return [...this.recipies].sort((post1, post2) => post1[this.selectValue]?.toString().localeCompare(post2[this.selectValue].toString()));
    }
  },
  watch: {
    selectValue(){
      console.log(this.selectValue);
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
