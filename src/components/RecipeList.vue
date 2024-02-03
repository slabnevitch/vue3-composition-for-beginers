<template>
  <!-- <div>
    
  </div>
  <n-button @click="customPropClick">change customProp</n-button>
  <n-button>{{customProp}}</n-button> -->
  
  <n-divider v-if="recipies.length > 0" dashed>
    Comments
  </n-divider>
  
  <n-list v-if="recipies.length > 0">
    <n-select v-model:value="selectValue" :options="options" />
    <RecipeDetail v-for="item, i in recipies" :key="item.id" :recipe="item" @remove="postRemoveFromList"/>
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
          label: "Everybody's Got Something to Hide Except Me and My Monkey",
          value: "song0",
          disabled: true
        },
        {
          label: "Drive My Car",
          value: "song1"
        },
        {
          label: "Norwegian Wood",
          value: "song2"
        },
        {
          label: "You Won't See",
          value: "song3",
          disabled: true
        },
        {
          label: "Nowhere Man",
          value: "song4"
        },
        {
          label: "Think For Yourself",
          value: "song5"
        },
        {
          label: "The Word",
          value: "song6"
        },
        {
          label: "Michelle",
          value: "song7",
          disabled: true
        },
        {
          label: "What goes on",
          value: "song8"
        },
        {
          label: "Girl",
          value: "song9"
        },
        {
          label: "I'm looking through you",
          value: "song10"
        },
        {
          label: "In My Life",
          value: "song11"
        },
        {
          label: "Wait",
          value: "song12"
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
