<template>
	<h1>Comments for post with id = {{$route.params.id}}</h1>
	<ul>
		<li v-for="comment in comments" :key="comment.id">
			<h2>{{comment.email}}</h2>
			<p>{{comment.body}}</p>
		</li>
	</ul>
</template>

<script>
export default {

  name: 'PostComments',

  data () {
    return {
    	comments: []
    }
  },
   async mounted(){
  	// console.log(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
  	try {
	  	const currentComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`)
	      .then(response => response.json());

	      this.comments = currentComments 

  	} catch(e) {
  		// statements
  		console.log(e);
  	}finally{
  		console.log('finally');
  		// console.log(this.show);
  		// this.show = false;
  		// console.log(this.show);
  	}
  } 
}
</script>

<style lang="css" scoped>
</style>