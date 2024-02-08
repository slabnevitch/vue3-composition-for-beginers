<template>
  <n-list-item style="padding: 15px">
    <n-card>
       <n-space align="space-between">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <n-h3>{{recipe.id}}</n-h3>
        </n-space>
        <n-text type="primary">
         <n-h2>{{$store.getters.doubleLikes}} {{recipe.title}}</n-h2>
        </n-text>
        
        
        <n-blockquote>
          {{recipe.body}}
        </n-blockquote>
        
        <n-divider dashed></n-divider>
        <n-flex justify="space-between">
          <n-button
            @click="$router.push({name:'postContent', params:{id: recipe.id }})"
            strong secondary>
            Подробнее
          </n-button>

          <!-- <router-link :to="`posts/${recipe.id}/comments`">pizda</router-link> -->
           <n-button
            @click="$router.push({name:'comments', params:{id: recipe.id }})"
            strong secondary>
            Комментарии
          </n-button>

          <n-button
          @click="removePost"
          strong secondary type="error">
          Удалить запись
        </n-button>


        </n-flex>
    </n-card>
     
    </n-list-item>
</template>

<script>
  // import {ref, watch} from 'vue'
  import { NListItem, NThing, NCard, NButton, NText, NSpace, NAvatar, NH2, NH3, NBlockquote, NDivider, NFlex  } from 'naive-ui';
export default {
  components: {
    NListItem, NThing, NCard, NButton, NText, NAvatar, NSpace, NH2, NH3, NBlockquote, NDivider, NFlex 
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
      this.$emit('remove', this.recipe);
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
