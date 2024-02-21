export const postModule = {
	 state: () => ({
	    // return {
	  		posts: [],
	  		 page: 1,
		     limit: 5,
		     totalPages: 0
	    // }
	  }),
	  mutations: {
	    setNewPost(state, post) {
	      state.posts.push(post);
	    },
	    setRemovedPost(state, delPost) {
	      state.posts = state.posts.filter(post => post.id !== delPost.id);
	    },
	    setAllPosts(state, postsArray) {
	    	console.log(postsArray)
	      state.posts =  postsArray;
	      console.log(state.posts)
	    },
	    setTotalPages(state, payload) {
	      state.totalPages = payload;
	    }
	  },
	  actions: {
	  	postAdd({commit}, newPost){
	      commit('setNewPost', newPost);
	    },
	    postRemove({commit}, deletedPost){
	      commit('setRemovedPost', deletedPost);
	    },
	    async fetchPosts({state, commit}){
	      console.log('fetchPosts!!')
	      try {
	        // this.show = true;
	        const fetched = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${state.limit},&_page=${state.page}`);
	            // .then(response => response.json());
	            // console.log(fetched.headers.get('X-Total-Count'));

	        // console.log(await fetched.json())
	        commit('setTotalPages', Math.ceil(fetched.headers.get('X-Total-Count') / state.limit));
	        commit('setAllPosts', await fetched.json());
	        // this.posts = [... this.posts, ... await fetched.json()];//для бесконечной загрузки новых постов при скролле 
	        // this.show = false;
	      
	      } catch(e) {
	        // statements
	        console.log(e);
	      } finally {

	      }
	    }
	  },
	  getters: {
	  	doubleLikes(state){
	  		return state.likes * 2;
	  	},
	  	getPosts: state => {
	      return state.posts;
	    }

	  },
	  modules: {
	  	
 		}
}