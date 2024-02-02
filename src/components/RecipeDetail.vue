<template>
  <n-list-item style="padding: 15px">
    <n-card>
       <n-space align="space-between">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <n-h3>cos(x)</n-h3>
        </n-space>
        <n-text type="primary">
         <n-h2>{{recipe.title}}</n-h2>
        </n-text>
        
        
        <n-blockquote>
          {{recipe.body}}
        </n-blockquote>
        
        <n-divider dashed></n-divider>
          <n-button
           @click="removePost"
           strong secondary type="error">
          Удалить запись
        </n-button>
    </n-card>
     
    </n-list-item>
</template>

<script>
  // import {ref, watch} from 'vue'
  import { NListItem, NThing, NCard, NButton, NText, NSpace, NAvatar, NH2, NH3, NBlockquote, NDivider  } from 'naive-ui';
export default {
  components: {
    NListItem, NThing, NCard, NButton, NText, NAvatar, NSpace, NH2, NH3, NBlockquote, NDivider 
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
  },
  methods: {
    removePost(){
      
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
