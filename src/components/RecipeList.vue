<template>
 <n-list hoverable clickable>
    <n-list-item>
      <n-thing title="Better Late Than Never" content-style="margin-top: 10px;">
        Lorem ipsum dolor sit amet,<br>
        consectetur adipiscing elit,<br>
        sed do eiusmod tempor incididunt<br>
        ut labore et dolore magna aliqua.<br>
        Ut enim ad minim veniam,<br>
        quis nostrud exercitation ullamco
      </n-thing>
    </n-list-item>
  </n-list>
</template>

<script>
  import { NSpace, NList, NListItem, NThing } from 'naive-ui';
export default {
  components: {
    NSpace,
    NList,
    NListItem,
    NThing
  }
  // props: {
  //   recipies: {
  //     type: Array,
  //     default: () => []
  //   },
  //   setCurrent: {
  //     type: Function
  //   }
  // },
//   methods: {
//     clickRecipie(id){
//       console.log(id)
//       this.setCurrent(id)
//     }
//   }
}
</script>

<style>
  .card {
    border-bottom: 1px solid #eee;
    padding: 1rem;
    transition: 300ms all ease;
    cursor: pointer;
    background: #fff;
  }

  .empty {
    padding: 1rem;
    background: #fff!important;
  }

  .card-title {
    padding: 1rem;
    text-align: center;
  }

  .card:hover {
    background: #eee;
  }

  .list {
    background: #fffeee;
  }
</style>
