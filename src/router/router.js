import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Posts from '@/pages/Posts.vue'
import About from '@/pages/About.vue'
import SinglePost from '@/pages/SinglePost.vue'
import SinglePostContent from '@/components/SinglePostContent.vue'
import PostComments from '@/pages/PostComments.vue'
import PostsWithStore from '@/pages/PostsWithStore.vue'

// const { createRouter, createWebHistory, createWebHashHistory } = VueRouter

const routes = [
  { path: '/', component: Main },
  { path: '/posts', component: Posts },
  { path: '/about', component: About },
  { path: '/posts/:id', component: SinglePost,
  	children: [
      {
        // PostComments будет отрендерен внутри <router-view> компонента SinglePost
        // при соответствии /posts/:id/comments
        name: 'postContent',
        path: 'content',
        component: SinglePostContent,
      },
      {
        // PostComments будет отрендерен внутри <router-view> компонента SinglePost
        // при соответствии /posts/:id/comments
        name: 'nestedComments',
        path: 'comments',
        component: PostComments,
      }
    ]
   },
  { path: '/posts/:id/comments',
   name: 'comments',
   component: PostComments
  },
  { path: '/posts-data/', component: PostsWithStore }
];

const router = createRouter({
  // 4. Предоставьте реализацию history для использования. Для простоты мы используем hash.
  history: createWebHistory(),
  routes, // сокращение от `routes: routes`
});

export default router;