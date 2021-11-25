import {ref, reactive} from 'vue'
export function useApp (){
	const recipies = reactive([
        {
          title: 'Skotnik',
          description: 'Procenko',
          id: '1'
        }
      ]);

    const current = ref(null);

    const onAdd = (recipe) => {
      console.log('onAdd')
      recipies.push(recipe)
    };
    const setCurrent = (id) => {
      console.log(id)
      current.value = recipies.find(r => r.id === id)
     };
    const remove = (id) => {
      recipies.value = recipies.filter(r => r.id !== id)
      current.value = null
    };
	
	return{
		recipies,
		current,
		onAdd,
		setCurrent,
		remove 
	}
}