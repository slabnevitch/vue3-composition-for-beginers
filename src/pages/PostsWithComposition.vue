<template>
	<n-message-provider >
      <n-layout>
        {{showModal}}
        <n-button @click="showModal = !showModal">showModal</n-button>
        <p>{{page}}</p>
        <!-- <h1>{{ getPage}}</h1> -->

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
  setup(props, context){
   // const store = useStore();//использование store. Нужен импорт import { useStore } from 'vuex';
    const showModal = ref(false);
    const counter = ref(1);


    const page = ref( 1);
    const limit = ref( 5);
    const {posts, show, totalPages} = fetchPosts( page.value, limit.value);
    console.log(posts)
    // onMounted(fetchPosts);

    const postAdd = (newPost) => {
      posts.push(newPost);
    };

    const postRemove = (deletedPost) => {
      // console.log(Array.isArray(this.posts));
      posts.value = posts.value.filter(post => post.id !== deletedPost.id);
    }

    watch(page, (newValue, oldValue) => {
      fetchPosts(page.value, limit.value);
      console.log('watch page')
      console.log(posts.value)
    });
    
    // onMounted( () => {
    //  console.log('mountins!');
    //   fetchPosts( page.value, limit.value);
    // });

    return{
      theme: ref(darkTheme),
      darkTheme,
      lightTheme,

      showModal,
      limit,
      page,
      counter,
      postAdd,
      postRemove,
      posts,
      isLoading: show,
      totalPages
    }
  }

  // watch:{
    // page(){
    //   this.fetchPosts();
    // }
  // },
  // mounted(){
    // this.$store.dispatch('fetchPosts');
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
  // },

  
}
</script>

<style lang="css" scoped>

</style>