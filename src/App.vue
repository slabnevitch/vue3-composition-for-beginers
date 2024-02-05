<template>
    <n-config-provider :theme="theme">
      <n-layout>
        <n-layout-content content-style="padding: 24px; height: 100%">
        
            <router-view></router-view>
        
        </n-layout-content>
      </n-layout>
      <n-global-style />
    </n-config-provider>
</template>


<script>
import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NLayout, NLayoutContent } from 'naive-ui';

export default {
  name: 'app',
  components:{
    darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NLayout, NLayoutContent
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
