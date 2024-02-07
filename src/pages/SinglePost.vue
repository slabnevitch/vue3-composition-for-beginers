<template>
	<h1>Post whit id= {{$route.params.id}}</h1>
	<n-spin v-show="show" size="large" />
	<n-list>
	 <n-list-item style="padding: 15px">
		<n-card :title="post.title">
			<n-blockquote>
				{{post.body}}
			</n-blockquote>
	</n-card>

	</n-list-item>
	</n-list>
</template> 

<script>
	import {NList,
	NListItem,
	NCard,
	NSpin,
	NBlockquote} from 'naive-ui'

export default {

  name: 'SinglePost',

  components:{NList,
	NSpin,
  	NListItem,
	NCard,
	NBlockquote
  },

  data () {
    return {
    	show: true,
    	post:{
    		id: '',
    		title: '',
    		body: ''
    	}
    }
  },
  async mounted(){
  	console.log(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
  	try {
	  	const currentPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
	      .then(response => response.json());

	      this.post = {
	      	id: currentPost.id,
	      	title:  currentPost.title,
	      	body:  currentPost.body
	      }

  	} catch(e) {
  		// statements
  		console.log(e);
  	}finally{
  		console.log('finally');
  		console.log(this.show);
  		this.show = false;
  		console.log(this.show);
  	}
  } 
}
</script>

<style lang="css" scoped>
</style>