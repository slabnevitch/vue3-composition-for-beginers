<template>
	<h1>Post whit id= {{$route.params.id}}</h1>
	<router-view></router-view>
</template> 

<script>
	

export default {

  name: 'SinglePost'
}
</script>

<style lang="css" scoped>
</style>