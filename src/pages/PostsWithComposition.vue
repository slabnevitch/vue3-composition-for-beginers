<template>
	<n-message-provider >
    <n-config-provider :theme="theme">
      <n-layout>
        <!-- {{theme.name}} -->
        <!-- <n-button @click="showModal = !showModal">showModal</n-button> -->
        <!-- <p>{{posts}}</p> -->
        <!-- <h1>{{totalPages.value}}</h1> -->

        <n-layout-content content-style="padding: 24px; height: 100%">
          <n-space style="padding-bottom: 24px;">

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
            <n-spin v-show="isLoading" size="large" />
          </n-flex>

         <RecipeList v-model:recipies="posts" @remove="postRemove" v-model:customProp="counter" v-model:currPage="page" v-model:totalPages="totalPages" v-model:limit="limit"></RecipeList>
          
          <!-- для бесконечной загрузки новых постов при скролле -->
          <!-- <div ref="obsv" class="observer-block">
              <n-flex justify="center">
                <n-spin v-show="show" size="large" />
               </n-flex>
          </div> -->
        </n-layout-content>
      </n-layout>
    </n-config-provider>
  </n-message-provider>
</template>

<script>
	import {ref, reactive, watch, onMounted} from 'vue';
  import { mapState, mapGetters, mapActions, useStore } from 'vuex';

  import { fetchPosts } from '@/hooks/fetchPosts.js';

	import AddRecipe from '@/components/AddRecipe'

	import RecipeList from '@/components/RecipeList'


	import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle, NSpace, NButton, NLayout, NLayoutHeader, NLayoutContent, NMessageProvider, NDivider, NH2, NModal, NSpin, NFlex } from 'naive-ui';

export default {

  name: 'PostsWithComposition',

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

  // data(){
  //   return{
  //     counter: 1,
  //     show: true,
  //     showModal: false,
      
      
  //     lightTheme,
  //     darkTheme,
  //     theme: darkTheme


  //   }
  // },
  setup(setup, ctx){
     
   // const store = useStore();//использование store. Нужен импорт import { useStore } from 'vuex';
    const showModal = ref(false);
    const counter = ref(1);
    const theme = ref(darkTheme);

    const limit = 4;
    const {posts, isLoading, totalPages, page} = fetchPosts(limit);// получение постов и д.р. из декомпозированной ф-ции. '@/hooks/fetchPosts.js';
   
    const postAdd = (newPost) => {
      posts.value.push(newPost);
    };

    const postRemove = (deletedPost) => {
      // console.log(Array.isArray(this.posts));
      posts.value = posts.value.filter(post => post.id !== deletedPost.id);
    }

    // watch(page, (newValue, oldValue) => {
    //   getPosts(page.value, limit.value);
    // });
    
    // onMounted(getPosts);

    return{
      theme,
      darkTheme,
      lightTheme,

      showModal,
      limit,
      page,
      counter,
      postAdd,
      postRemove,
      posts,
      isLoading,
      totalPages
    }
  }
  
}
</script>

<style lang="css" scoped>

</style>