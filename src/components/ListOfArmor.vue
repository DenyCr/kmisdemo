<template lang="pug">
.test
  
  aside(class="sidebar")
    //- span {{selected}}
    //- br
    p МО
    select(v-model="selectedCompany")
      option(v-for="sel in selected"  v-bind:value="sel.id" v-bind:company="sel.company") {{ sel.company }} 
    br     
    span {{selectedCompany}}
    button Записаться
    h1 Список номерков &nbsp;
    router-link(
      v-for="post in getDoctors"
      active-class="in-active"
      class="link"
      :to="{ name: 'post', params: { id: post.id } }"
      ) 
      div(class="armor") {post.userId}}. { post.name }} 
  
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
      selected: [],
      selectedCompany: null,
      // userPost: []
    }
  },
  computed: {
      getDoctors: function () {
        if (this.selectedCompany != null){
          return  this.posts.filter(post=> post.index == this.selectedCompany)
        }
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
          // console.log('this.posts: ', this.posts);
          this.selected = this.posts.map(post=> 
            {          return {id: post.index, company: post.company}} ); 
          // console.log('this.selected: ', this.selected);
          
          // this.userPost =  this.posts.filter(post=> post.userId == selectedCompany)
        })
        .catch(Error => {
          console.log('---------error----------');
          console.log(Error);
        })
    },


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
