<template>
  <n-message-provider >
    <n-config-provider :theme="theme">
      <n-layout>
        <n-layout-content content-style="padding: 24px; height: 100%">
       <!--    <h1>{{ counter}}</h1>
          <n-button @click="counter += 1">counter increment</n-button> -->
          <n-space style="padding-bottom: 24px;">
            <!-- <n-button>{{theme}}</n-button> -->
            <n-button @click="theme = darkTheme">Dark</n-button>
            <n-button @click="theme = lightTheme">Light</n-button>
          </n-space>
          <n-button @click="showModal = true">
            Добавить сообщение
          </n-button>
          
          
          <n-modal v-model:show="showModal" preset="dialog" title="Создание нового сообщения">
            <slot>
              <AddRecipe @addPost="postAdd" v-model:modalClose=" showModal"/>
            </slot>
          </n-modal>
          
          <n-flex justify="center">
            <n-spin v-show="show" size="large" />
          </n-flex>

          <RecipeList :recipies="posts" @remove="postRemove" v-model:customProp="counter"></RecipeList>
   
        </n-layout-content>
      </n-layout>
      <!-- <n-global-style /> -->
    </n-config-provider>
  
  </n-message-provider>

</template>

<script>
import {ref, reactive} from 'vue';

import AddRecipe from '@/components/AddRecipe'

import RecipeList from '@/components/RecipeList'


import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NSpace, NButton, NLayout, NLayoutHeader, NLayoutContent, NMessageProvider, NDivider, NH2, NModal, NSpin, NFlex } from 'naive-ui';

export default {
  name: 'app',
  
  components: {
    AddRecipe,
    RecipeList,
    NConfigProvider,
    NGlobalStyle,
    NSpace,
    NButton,
    NLayout,
    NLayoutContent,
    NMessageProvider,
    NDivider,
    NH2, NModal,
     NSpin,
     NFlex
  },

  // let posts = reactive([

  // ])

  data(){
    return{
      counter: 1,
      show: true,
      showModal: false,
      posts: [],
      
      lightTheme,
      darkTheme,
      theme: darkTheme


    }
  },

  methods: {
    postAdd(newPost){
      this.posts.push(newPost);
    },
    postRemove(deletedPost){
      this.posts = this.posts.filter(post => post.id !== deletedPost.id);
    },
    async fetchPosts(){
      try {
        const fetched = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then(response => response.json())
            // .then(json => console.log(json));
        this.posts = fetched;
        this.show = false;
      } catch(e) {
        // statements
        console.log(e);
      } finally {

      }
    }
  },

  mounted(){
    this.fetchPosts();
  }

  // setup(){
  //   return{
  //     theme: ref(darkTheme),
  //     darkTheme,
  //     lightTheme
  //   }
  // }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;

  }
  #app{
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: #222;
  }

  a {
    text-decoration: none;
    color: darkblue;
    transition: .3s all ease;
  }

  .center {
    text-align: center;
  }

  a:hover {
    cursor: pointer;
    opacity: .7;
    text-decoration: underline;
  }


  .container {
    max-width: 1000px;
    margin: 0 auto;
    height: 100vh;
  }

  .columns {
    display: flex;
  }

  .detail, .list {
    width: 50%;
    border: 1px solid #eee;
  }

  .list {
    border-right: 0;
  }

  .btn {
    border-radius: 5px;
    background: darkblue;
    color: #fff;
    padding: 6px 14px;
    cursor: pointer;
  }

  .btn:disabled {
    background-color: #eee;
    color: black;
    cursor: not-allowed;
  }

  .btn.remove {
    background: darkred;
  }

  .btn.secondary{
    background: grey;
  }
</style>
