<template lang="pug">
.test
  h1 привет  сосед &nbsp;
  //- .row
  //-   input(type="text") 
  //-   select(name="select" size="3" multiple="multiple")
  //-     option Чебурашка
  //-     option Крокодил Гена
  //-     option Шапокляк
  //-     option Крыса Лариса
  div(class="post" v-if="post")
    div(class="post__title") h1 {{ post.title }}
    div(class="post__body") p {{ post.body }}
    div(class="post__id") p {{ post.id }}

</template>
<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      post: null,
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },

  methods: {
    getPost(id) {
      axios(this.endpoint + id)
        .then(response => {
          this.post = response.data
        })
        .catch( error => {
          console.log(error)
        })
    }
  },
    
  created() {
    this.getPost(this.id);
  },

  watch: {
  '$route'() {
    this.getPost(this.id);
  }
}
}
</script>
<style lang="sass" scoped>
.test
  background: #FFFFE4
  //display: flex


h1 
  color: green

.row
  display: flex
  flex-direction: column  
</style>
