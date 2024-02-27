import {ref, reactive, onMounted} from 'vue';

export async function fetchPosts(page, limit){
	console.log('fetchPosts!!');
	const show = ref(false),
    	totalPages = ref(0);

		try {
	        show.value = true;
	        const fetched = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${ limit},&_page=${page}`);
	            // .then(response => response.json());
	            console.log(fetched.headers.get('X-Total-Count'));

	        totalPages.value = Math.ceil(fetched.headers.get('X-Total-Count') / limit);
	        show.value = false;
	        return await fetched;//для пагинации
	        
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