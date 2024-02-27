<template>
  <!-- <div>
    
  </div>
  <n-button @click="customPropClick">change customProp</n-button>
  <n-button>{{customProp}}</n-button> -->
  
  <n-divider v-if="recipies.length > 0" dashed>
    Comments
  </n-divider>
  
    <n-list  v-if="recipies.length > 0">
      <n-input v-model:value="search" type="text" placeholder="Basic Input" />
      <n-select v-model:value="selectValue" :options="options" placeholder="Сортировка" />
      
      <transition-group name="pizd-list">
        <RecipeDetail v-for="item, i in searchedRcipies" :key="item.id" :recipe="item" @remove="postRemoveFromList"/>
      </transition-group>
    </n-list>
    

  <n-divider  v-else dashed>
    Нет записей
  </n-divider>

  <!-- <p>totalPages: {{totalPages}}</p> -->
  <n-pagination v-model:page="page" :page-count="totalPages"  @update:page="pageUPdate"/>
 
</template>

<script>
  import { NSpace, NList, NListItem, NThing, NButton, NDivider, NSelect, NInput, NPagination } from 'naive-ui';
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
    NSelect,
    NInput,
    NPagination
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
    },
    currPage:{
      type: Number,
      default: 0
    },
    totalPages:{
      type: Number,
      default: 0
    },
    limit:{
      type: Number,
      default: 0
    }
  },
  emits: [
    'remove',
    'update:customProp',
    'update:currPage',
    'updatePage'
  ],
  data(){
    return{
      page: 1,
      search: '',
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
    },
    pageUPdate(page){
      console.log(page);
      this.$emit('update:currPage', page);
      this.$emit('updatePage', page);
      // this.currPage = page;
    }
  },
  computed: {
    sortedRcipies(){
      return [...this.recipies].sort((post1, post2) => post1[this.selectValue]?.toString().localeCompare(post2[this.selectValue].toString()));
    },
    searchedRcipies(){
      return this.sortedRcipies.filter((post) => post.title.includes(this.search));
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

  /*.list {
    background: #fffeee;
  }*/

  .pizd-list-item {
  display: inline-block;
  margin-right: 10px;
}
.pizd-list-enter-active,
.pizd-list-leave-active {
  transition: all 1s ease;
}
.pizd-list-enter-from,
.pizd-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.pizd-list-move {
  transition: transform 0.8s ease;
}
</style>
