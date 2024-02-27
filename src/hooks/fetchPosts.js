import {ref, reactive, onMounted} from 'vue';

export async function fetchPosts(page, limit){
	console.log('fetchPosts!!');
	// const totalPages = ref(0);

		try {

	        return  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${ limit},&_page=${page}`);
	            // .then(response => response.json());
	            console.log(fetched.headers.get('X-Total-Count'));

	        // totalPages.value = Math.ceil(fetched.headers.get('X-Total-Count') / limit);
	         await fetched;//для пагинации
	        
	        // this.posts = [... this.posts, ... await fetched.json()];//для бесконечной загрузки новых постов при скролле 
	            // console.log( fetchedPosts.value);
	      
	      } catch(e) {
	        // statements
	        console.log(e);
	      } finally {

	      }

    // onMounted(fetching);
  // return{
  // 	fetchedPosts, totalPages
  // }

}