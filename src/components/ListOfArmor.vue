<template lang="pug">
.test

  aside(class="sidebar")
    router-link(
      v-for="post in userPost"
      active-class="in-active"
      class="link"
      :to="{ name: 'post', params: { id: post.id } }"
      ) 
      div(class="armor") {{post.id}} {{ post.title }} 
  //- h1 ListOfArmor &nbsp;
  div(class="content")
    router-viev
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {      
      props: ['id'],
      posts: null,
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      userPost: []
    }
  },

  created() {
    this.getAllPOsts();
  },

  methods: {
    getAllPOsts() {
      axios.get(this.endpoint)
        .then(Response => {
          this.posts = Response.data;
          this.userPost =  this.posts.filter(post=> post.userId == 1)
          // console.log('this.userPost: ', this.userPost);
        })
        .catch(Error => {
          console.log('---------error----------');
          console.log(Error);
        })
    }
  }

}
</script>
<style lang="sass" scoped>
.test
  display: flex
  // width: 100%

h1 
  color: red

content 
  flex: 1 1 70%
  display: flex
  align-items: center
  justify-content: center

.armor
  background: #007E3E  /* Цвет фона */
  color: #fff /* Цвет текста */
  padding: 20px   /* Поля */  
  border-radius: 10px /* Уголки */
  margin-top: 10px  /* Отступ сверху */
  // border: 2px solid #000 /* Параметры рамки */
  -moz-box-sizing: border-box /* Для Firefox */  
  box-sizing: border-box /* Ширина блока с полями */


</style>
