import {ref, computed, watch} from 'vue';

export function filterPosts(recipies, search){
	console.log(recipies)
	const options = [
        {
          label: "По заголовку",
          value: "title"
        },
        {
          label: "По содержанию",
          value: "body"
        },
        {
          label: "По идентификатору",
          value: "id"
        }
      ];

  const sortedRcipies = computed(() => {
      return [...recipies].sort((post1, post2) => post1[selectValue.value]?.toString().localeCompare(post2[selectValue.value].toString()));
    });
  const searchedRcipies = computed(() =>{
      return sortedRcipies.filter((post) => post.title.includes(search.value));
    });

  return searchedRcipies;
}
// "vue": "^3.4.15",