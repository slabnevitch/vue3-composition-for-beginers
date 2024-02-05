<template>
  <n-message-provider >
    <n-config-provider :theme="theme">
      <n-layout>
        <n-layout-content content-style="padding: 24px; height: 100%">
          <!-- <h1>{{ page}}</h1> -->
          <!-- <n-button @click="counter += 1">counter increment</n-button> -->
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

          <RecipeList v-model:recipies="posts" @remove="postRemove" v-model:customProp="counter" v-model:currPage="page" v-model:totalPages="totalPages" v-model:limit="limit"></RecipeList>
          
          <!-- для бесконечной загрузки новых постов при скролле -->
          <div ref="obsv" class="observer-block">
              <n-flex justify="center">
                <n-spin v-show="show" size="large" />
               </n-flex>
          </div>
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
      page: 1,
      limit: 5,
      totalPages: 0,

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
      console.log('fetchPosts!!')
      try {
        this.show = true;
        const fetched = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit},&_page=${this.page}`);
            // .then(response => response.json());
            console.log(fetched.headers.get('X-Total-Count'));

        this.totalPages = Math.ceil(fetched.headers.get('X-Total-Count') / this.limit);
            console.log(this.totalPages);
        // this.posts = await fetched.json();//для пагинации
        this.posts = [... this.posts, ... await fetched.json()];//для бесконечной загрузки новых постов при скролле 
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

    console.log(this.$refs.obsv);

    // для бесконечной загрузки новых постов при скролле 
    var observerCallback = (entries, observer) => {
      if(entries[0].isIntersecting){
        console.log('obsv intersect!');
        if(this.page < this.totalPages){
          this.page += 1;
          this.fetchPosts();
        }
      }else{
        // headerElem.classList.add('_scroll');
      }
    };

    var headerObserver = new IntersectionObserver(observerCallback);
    headerObserver.observe(this.$refs.obsv);
  },

  watch:{
    page(){
      this.fetchPosts();
    }
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
</style>
