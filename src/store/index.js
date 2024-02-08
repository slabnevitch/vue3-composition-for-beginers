import { createStore } from 'vuex'
import { postModule } from '@/store/postModule'

const store = createStore({
  state () {
    return {
  	
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
  	post: postModule
  }
})

export default store
