<template>
  <n-config-provider :theme="darkTheme">
    <n-layout>
      <n-layout-content content-style="padding: 24px;">
      <!--   <n-space>
          <n-button @click="theme = darkTheme">Dark</n-button>
          <n-button @click="theme = null">Light</n-button>
        </n-space> -->
        <AddRecipe :onAdd="onAdd" />
      
      </n-layout-content>
    </n-layout>
    <n-global-style />

      <!-- <div class="columns">
        <RecipeList :recipies="recipies"
          :setCurrent="setCurrent" />
        <RecipeDetail :recipe="current"
          @deleteRecipe="remove" />
      </div> -->
  
  </n-config-provider>

</template>

<script>
import AddRecipe from '@/components/AddRecipe'
import RecipeDetail from '@/components/RecipeDetail'
import RecipeList from '@/components/RecipeList'

import {useApp} from '@/compositions/app'
import { darkTheme, NConfigProvider, NGlobalStyle, NSpace, NButton, NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui';

export default {
  name: 'app',
  
  components: {
    AddRecipe,
    RecipeList,
    RecipeDetail,
    NConfigProvider,
    NGlobalStyle,
    NSpace,
    NButton,
    NLayout,
    NLayoutContent
  },
  
  setup(){
    return{
      ...useApp(),
       darkTheme
    }
  }
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
