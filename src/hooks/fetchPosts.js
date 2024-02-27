import {ref, reactive, watch, onMounted} from 'vue';

export function fetchPosts(limit){
	console.log('fetchPosts!!');

	// все эти перемнные сохранят свою реактивность при импорте в любой вью компонент
	// (в данном случае - в PostsWithComposition.vue)
	const posts = ref([]); 
	const page = ref(1);
	const totalPages = ref(0);
	const isLoading = ref(true);

	const fetching = async () => {
		isLoading.value = true;
		try {

	        const response =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit},&_page=${page.value}`);
	            // .then(response => response.json());
	            console.log(response.headers.get('X-Total-Count'));

	        totalPages.value = Math.ceil(response.headers.get('X-Total-Count') / limit);
	        posts.value = await response.json();//для пагинации
	        
	        // this.posts = [... this.posts, ... await fetched.json()];//для бесконечной загрузки новых постов при скролле 
	            // console.log( fetchedPosts.value);
	      
	      } catch(e) {
	        // statements
	        console.log(e);
	      } finally {

			isLoading.value = false;
	      }
	}

    onMounted(fetching);
    watch(page, fetching);
  return{
  	posts, isLoading, totalPages, page
  }

}