<template lang="pug">
.test
  
  aside(class="sidebar")
    button Записаться
    h1 Список номерков &nbsp;
    router-link(
      v-for="post in posts"
      active-class="in-active"
      class="link"
      :to="{ name: 'post', params: { id: post.id } }"
      ) 
      div(class="armor") {{post.id}}. {{ post.title }} 
  
  div(class="content")
    router-viev
</template>
<script>
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return { 
      posts: null,
      endpoint: '.\\src\\db\\generated.json',
      // userPost: []
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
          // this.userPost =  this.posts.filter(post=> post.userId == 2)
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

.content 
  flex: 1 1 
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

button
  width: -webkit-fill-available
  background: #007E3E  /* Цвет фона */
  color: #fff /* Цвет текста */
  padding: 20px   /* Поля */  
  border-radius: 10px /* Уголки */
  margin-top: 10px  /* Отступ сверху */
  // border: 2px solid #000 /* Параметры рамки */
  -moz-box-sizing: border-box /* Для Firefox */  
  box-sizing: border-box /* Ширина блока с полями */


</style>
