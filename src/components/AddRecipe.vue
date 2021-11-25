<template>
  <form class="form" @submit.prevent="submit">
    <h1>Добавить рецепт</h1>
    <p>{{ isValid }}</p>
    <div v-if="visible">
      <div class="input">
        <input type="text" placeholder="Название рецепта" v-model.trim="form.title" />
      </div>
      <div class="input">
        <input type="text" placeholder="Описание рецепта" v-model.trim="form.description" />
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit">Создать</button>
      <button class="btn secondary" type="button" @click="toggle">
        {{visible ? 'Убрать' : 'Показать'}} форму
      </button>
    </div>
  </form>
</template>

<script>
  import {ref, reactive, computed} from 'vue'
export default {
  props: {
    onAdd: {
      type: Function
    }
  },
  setup(props) {//вызывается еще до создания компонента, поэтому тут недоступен this
  //в ф-цию. setup передается объект props, чтобы внутри setup(){} были доступны переданные в компонент извне св-ва.

    const visible = ref(true);//для придания реактивности простые значения
    //оборачивваются в ref
    const toggle = () => {
      //создание метода
      visible.value = !visible.value;//у значений, обернутых в ref() нужно использовать параметр .value
    };

    const form = reactive({//для придания реактивности объекты и массивы
    //оборачивваются в  reactive()
      title: '',
      description: ''
    })
    const isValid = computed(() => {//создание computed св-ва.
      return form.title !== '' && form.description !== ""
    })
    function submit(){
      console.log("submit");
      const recipe = {
        title: form.title,//обращение к св-вам. без ключевого слова 
        description: form.description,//обращение к св-вам. без ключевого слова this
        id: Date.now().toString()
      };

      form.title = form.description = ''
      console.log(recipe);

      props.onAdd(recipe);//использование св-ва. из props
    }

    return {
      //нужно вернуть те данные, которые должны быть
      //доступны в шаблоне
      visible,
      toggle,
      form,
      submit,
      isValid
    };
  }
};
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
  }

  .form h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  .input {
    margin-bottom: 1rem;
  }

  .input input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: 400px;
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
</style>
