<template>
    <n-config-provider :theme="theme">
      <n-layout>
        <n-layout-content content-style="padding: 24px;">
            <n-flex justify="space-between">
              <h1>Welcome to the Vue fundamentals!</h1>
              <n-flex>
                  <router-link to="/posts">Posts</router-link>

                  <router-link to="/about">About</router-link>

                  <router-link to="/posts-data">PostsStore</router-link>
                
              </n-flex>
            </n-flex>
            <router-view></router-view>
        
        </n-layout-content>
      </n-layout>
      <n-global-style />
    </n-config-provider>
</template>


<script>
import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NLayout, NLayoutContent, NFlex } from 'naive-ui';

export default {
  name: 'app',
  components:{
    darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NLayout, NLayoutContent, NFlex
  },
  data(){
    return{
      lightTheme,
      darkTheme,
      theme: darkTheme
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

  html, body {
    height: 100%;

  }
  #app{
    height: 100%;
  }  
</style>
