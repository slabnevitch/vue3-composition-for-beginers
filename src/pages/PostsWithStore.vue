<template>
	<n-message-provider >
      <n-layout>
      	<h1>{{$store.state.likes}}</h1>
        <h1>Pizduk@</h1>

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
  </n-message-provider>
</template>

<script>
	import {ref, reactive} from 'vue';

	import AddRecipe from '@/components/AddRecipe'

	import RecipeList from '@/components/RecipeList'


	import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NSpace, NButton, NLayout, NLayoutHeader, NLayoutContent, NMessageProvider, NDivider, NH2, NModal, NSpin, NFlex } from 'naive-ui';

export default {

  name: 'PostsWithStore',

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
      
      
      lightTheme,
      darkTheme,
      theme: darkTheme


    }
  },

  methods: {
    postRemove(){
      console.log('postRemove is called!')
    }
  },

  mounted(){
    this.$store.dispatch('fetchPosts');
    // console.log(this.posts)
    // для бесконечной загрузки новых постов при скролле 
  //   var observerCallback = (entries, observer) => {
  //     if(entries[0].isIntersecting){
  //       console.log('obsv intersect!');
  //       if(this.page < this.totalPages){
  //         this.page += 1;
  //         this.fetchPosts();
  //       }
  //     }else{
  //     }
  //   };

  //   var headerObserver = new IntersectionObserver(observerCallback);
  //   headerObserver.observe(this.$refs.obsv);
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
    page(){
      return this.$store.state.page;
    },
    limit(){
      return this.$store.state.limit;
    },
    totalPages(){
      return this.$store.state.totalPages;
    }
  },
  watch:{
    // page(){
      // this.fetchPosts();
    // }
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

<style lang="css" scoped>

</style>