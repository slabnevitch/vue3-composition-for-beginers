<template>
	<h1>Post whit id= {{$route.params.id}}</h1>
	<n-list>
	 <n-list-item style="padding: 15px">
		<n-card>
			<n-space align="space-between">
				<n-avatar
				round
				size="small"
				src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
				/>
				<n-h3>{{post.id}}</n-h3>
			</n-space>
			<n-text type="primary">
				<n-h2>{{post.title}}</n-h2>
			</n-text>


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
NSpace,
NAvatar,
NText,
NBlockquote} from 'naive-ui'
export default {

  name: 'SinglePost',

  components:{NList,

  	NListItem,
	NCard,
	NSpace,
	NAvatar,
	NText,
	NBlockquote
  },

  data () {
    return {
    	post:{
    		id: '',
    		title: '',
    		body: ''
    	}
    }
  },
  async mounted(){
  	console.log(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
  	const currentPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      .then(response => response.json());
      console.log(currentPost);
      this.post = {
      	id: currentPost.id,
      	title:  currentPost.title,
      	body:  currentPost.body
      }
  } 
}
</script>

<style lang="css" scoped>
</style>