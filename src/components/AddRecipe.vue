<template>
  
  
    <n-form
      ref="formRef"
      :model="formValue" 
      :rules="rules"
    >
      <n-form-item label="Name" path="name">
        <n-input  v-model:value="formValue.name" placeholder="Olexander" />
      </n-form-item>

     <n-form-item :span="12" label="Comment" path="text">
        <n-input
          placeholder="Text of comment"
          type="textarea"
          v-model:value="formValue.text"
          :autosize="{
            minRows: 3,
            maxRows: 10
          }"
        />
      </n-form-item>
      <n-form-item>
        <n-button @click="handleValidateClick">
          Создать
        </n-button>
      </n-form-item>
    </n-form>

</template>


<script>
  import {ref, reactive, computed} from 'vue';
  import { NButton, NCard, NForm, NFormItem, NInput, useMessage, NMessageProvider } from 'naive-ui';

export default{
  components: {
       NButton,
       NForm,
      NInput,
       NCard,
       NFormItem,
       useMessage,
       NMessageProvider
    },
    data(){
      return{
        message: useMessage(),

        formValue: {
          // user:{
           name: null,
           text: null
          // }
       },
       rules: {
        name: {
          required: true,
          message: 'Please input your name',
          trigger: 'blur'
        },
        text: {
          required: true,
          message: 'Please input your message',
          trigger: ['input', 'blur']
        }
      }
    }
  },

  methods: {
    handleValidateClick (e) {
      e.preventDefault();
        console.log(this.formValue.name)

      this.$refs.formRef.validate((errors) => {
        if (!errors) {
          this.message.success('Valid');
        } else {
          console.log(errors);
          this.message.error('Invalid');
        }
      })
    }
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
