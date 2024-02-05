<template>
	<h1>Welcome to the Vue fundamentals!</h1>
	<ul>
		<li>
			<router-link to="/posts">Posts</router-link>
			
		</li>
		<li>
			<router-link to="/about">About</router-link>
			
		</li>
	</ul>
</template>

<script>
export default {

  name: 'Main',

  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>