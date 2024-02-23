<template>
	<n-message-provider >
      <n-layout>
        <h1>{{ getPage}}</h1>

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
            <n-spin v-show="isLoading" size="large" />
          </n-flex>

          <RecipeList v-model:recipies="posts" @remove="postRemove" v-model:customProp="counter" :currPage="page" @updatePage="changePagination" v-model:totalPages="totalPages" v-model:limit="limit"></RecipeList>
          
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
	import {ref, reactive} from 'vue';
  import { mapState, mapGetters, mapActions } from 'vuex';

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
     // Использование vuex actions через вспомогательные ф-ции.
    ...mapActions([
     'changePagination',
     'fetchPosts'
    ]),
    postRemove(deletedPost){
      console.log(Array.isArray(this.posts));
      this.$store.dispatch('postRemove', deletedPost);
      // this.posts = this.posts.filter(post => post.id !== deletedPost.id);
    },
    pageUpdate(translatedPage){
      // вызов методов из store/actions
      // this.$store.dispatch('changePagination', translatedPage);

      // вызов методов из store/actions, развернутых ч/з ...mapActions
      // this.changePagination(translatedPage);
    }
  },

  computed: {
    // Использование vuex state & getters через вспомогательные ф-ции. 
    ...mapState({
      posts: state => state.post.posts, //здесь ".post" - название модуля, импортроанного в поле modules файла /store/index.js -- modules: {post: postModule}. Это название указывать обязательно.
  
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      isLoading: state => state.post.isLoading
    }),
    ...mapGetters([
      'getPosts',
      'getPage'

    ]),

    // Использование vuex state & getters как обычные computed-свойства 
    // posts() {
    //   return this.$store.getters.getPosts;
    // },
    // page(){
    //   return this.$store.state.page;
    // },
    // limit(){
    //   return this.$store.state.limit;
    // },
    // totalPages(){
    //   return this.$store.state.totalPages;
    // }
  },
  watch:{
    page(){
      this.fetchPosts();
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