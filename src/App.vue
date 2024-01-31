<template>
  <n-message-provider>
    <n-config-provider :theme="theme">
      <n-layout>
        <n-layout-content content-style="padding: 24px;">
          <n-space style="padding-bottom: 24px;">
            <!-- <n-button>{{theme}}</n-button> -->
            <n-button @click="theme = darkTheme">Dark</n-button>
            <n-button @click="theme = lightTheme">Light</n-button>
          </n-space>
          <AddRecipe />

          <n-divider dashed>
             <n-h2>Comments</n-h2>
          </n-divider>
        
          <RecipeList :recipies="posts"></RecipeList>
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


import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NSpace, NButton, NLayout, NLayoutHeader, NLayoutContent, NMessageProvider, NDivider, NH2 } from 'naive-ui';

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
    NH2
  },

  // let posts = reactive([

  // ])

  data(){
    return{
      lightTheme,
      darkTheme,
      theme: darkTheme,

      posts: [
        {id: 1, title:"Skotnik", body: 'i popki ih gremyat'},
        {id: 2, title:"Skotnik", body: 'i popki ih gremyat-2'},
        {id: 3, title:"Skotnik", body: 'i popki ih gremyat-3'}
      ]
    }
  },

  // mounted(){
  //   console.log(lightTheme)
  //   console.log(darkTheme)
  // },

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
