<template>
  
    
  <n-form
    ref="formRef"

  >
    <n-form-item label="Name" path="user.name">
      <n-input  placeholder="Input Name" />
    </n-form-item>
    <n-form-item label="Age" path="user.age">
      <n-input placeholder="Input Age" />
    </n-form-item>
    <n-form-item label="Phone" path="phone">
      <n-input  placeholder="Phone Number" />
    </n-form-item>
    <n-form-item>
      <n-button>
        Validate
      </n-button>
    </n-form-item>
  </n-form>
      <!-- <h1>Pizdyk</h1> -->
      
  <n-card title="Card">
    Card Content
  </n-card>
      
 

    <!-- <form class="form" @submit.prevent="submit">
      <h1>Добавить рецепт</h1>
      <div>
        <div class="input">
          <input type="text" placeholder="Название рецепта" />
        </div>
        <div class="input">
          <input type="text" placeholder="Описание рецепта" />
        </div>
      </div>

      <div class="buttons">
          <n-button attr-type="submit">Добавить</n-button>
        <button class="btn" type="submit"></button> 
        <button class="btn secondary" type="button">
        </button>
      </div>
    </form> -->
  </template>


<script>
  import {ref, reactive, computed} from 'vue';
  import { NButton, NCard, NForm, NFormItem, NInput } from 'naive-ui';

export default{
  components: {
       NButton,
       NForm,
      NInput,
       NCard,
       NFormItem
    },
  props: {
    onAdd: {
      type: Function
    }
  },
  setup() {
    // const formRef = ref(null);
    // const rPasswordFormItemRef = ref(null);
    // const message = useMessage();
    // const modelRef = ref({
    //   age: null,
    //   password: null,
    //   reenteredPassword: null
    // });
    // function validatePasswordStartWith(rule, value) {
    //   return !!modelRef.value.password && modelRef.value.password.startsWith(value) && modelRef.value.password.length >= value.length;
    // }
    // function validatePasswordSame(rule, value) {
    //   return value === modelRef.value.password;
    // }
    // const rules = {
    //   age: [
    //     {
    //       required: true,
    //       validator(rule, value) {
    //         if (!value) {
    //           return new Error("Age is required");
    //         } else if (!/^\d*$/.test(value)) {
    //           return new Error("Age should be an integer");
    //         } else if (Number(value) < 18) {
    //           return new Error("Age should be above 18");
    //         }
    //         return true;
    //       },
    //       trigger: ["input", "blur"]
    //     }
    //   ],
    //   password: [
    //     {
    //       required: true,
    //       message: "Password is required"
    //     }
    //   ],
    //   reenteredPassword: [
    //     {
    //       required: true,
    //       message: "Re-entered password is required",
    //       trigger: ["input", "blur"]
    //     },
    //     {
    //       validator: validatePasswordStartWith,
    //       message: "Password is not same as re-entered password!",
    //       trigger: "input"
    //     },
    //     {
    //       validator: validatePasswordSame,
    //       message: "Password is not same as re-entered password!",
    //       trigger: ["blur", "password-input"]
    //     }
    //   ]
    // };
    return {

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
