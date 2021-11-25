<template>
  <div class="detail">
    <div class="recipe" v-if="recipe">
      <h2>{{recipe.title}}</h2>
      {{recipe}}
      <a href="#" @click.prevent="toggle">Показать</a>
      <p>visible - {{visible}}</p>
      <p v-if="visible">{{recipe.description}}</p>
      <button class="btn remove" @click="$emit('deleteRecipe', recipe.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
  import {ref, watch} from 'vue'
  import {useToggle} from '@/compositions/toggle'//импорт произвольной ф-ции., с методами и переменными, отвечающими за работу компонента
export default {
  props: {
    recipe: {
      type: Object,
      default: {
        title: '',
        description: ''
      }
    }
  },
  setup(props){
    const {visible, toggle} = useToggle();
      console.log(visible.value)

    const recipeWatch = watch(() => props.recipe, () => {
      visible.value = false
      console.log('props.recipe changed!' + visible.value)
    })//исп-е. вотчера: первая ф-ция. возвращает св-во. для отслеживания, вторая - коллбэк, который выполнится при изменении отслеживаемого св-ва.
    
    return {
      // ...useToggle()//возвращаем ипортированные методы и св-ва. для использования в шаблоне.
      visible, toggle //возвращаем ипортированные методы и св-ва. по отдельности для использования в шаблоне
    }
  }
}
</script>

<style>
  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .recipe p {
    font-size: .8rem;
    margin-bottom: .5rem;
  }

  .recipe a, .recipe h2 {
    margin-bottom: .5rem;
  }
</style>
