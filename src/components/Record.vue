<template lang="pug">
.test
  //- h1 привет  сосед &nbsp;
  //- .row
  //-   input(type="text") 
  //-   select(name="select" size="3" multiple="multiple")
  //-     option Чебурашка
  //-     option Крокодил Гена
  //-     option Шапокляк
  //-     option Крыса Лариса

  div(class="persData" v-if="post")
    
    div(class="FIO")
        p ФИО 
        input
    div(class="POL")
        p Пол
        select
          option(disabled value="") Выберите один из вариантов
          option Муж
          option Жен
        input(type="radio" id="one" value="Men" )
        label(for="one") Муж
        input(type="radio" id="two" value="Gl" )
        label(for="two") Жен
    div(class="HB")
        p Дата рождения
        input(type="date")
    div(class="CNILS")
        p СНИЛС
        input
    div(class="SerailPass" pattern="[1-5]{5}")
        p Серия полиса
        input
    div(class="NomerPass")
        p Номер полиса
        input

  div(class="contactInfo")     
    div(class="email")
        p электронная почта
        input
    div(class="phone" data-mask="+7(999)999-99-99")
        p номер телефона для связи
        input
     

  div(class="post" v-if="post")
    div(class="post__title") 
      h1 {{ post.title }}
    div(class="post__body") 
      p {{ post.body }}
    div(class="post__id")   
      p {{ post.id }}

</template>
<script>
import axios from 'axios';

export default {
   data() {
    return {
      post: null,
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },

  methods: {
    getPost(id) {
      // this.$route.params.id
      axios.get(this.endpoint + id)
        .then(response => {
          this.post = response.data
        })
        .catch( error => {
          console.log(error)
        })
    }
  },
    
  created() {
    this.getPost(this.$route.params.id);
  },

  updated() {
    this.getPost(this.$route.params.id);
  },
  // watch: {
  // '$route'() {
  //   this.getPost(this.id);
  // }
// }
}
</script>
<style lang="sass" scoped>
.test
  background: #FFFFE4
  //display: flex

.contactInfo
  background: red


h1 
  color: green

.row
  display: flex
  flex-direction: column 

.persData
  // display: grid
  //grid-template-columns: 20% auto
</style>
