import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
  		likes: 1,
      count: 0
    }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  },
  actions: {

  },
  getters: {
  	doubleLikes(state){
  		return state.likes * 2;
  	}
  },
  modules: {
  	
  }
})

export default store
