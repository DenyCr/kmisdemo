<template lang="pug">
.test

  div(class="persData" v-if="post")
    
    .FIO
      span ФИО 
      input(:placeholder="[[post[getId()].name]]" v-model='post[getId()].name')
    div(class="POL")
        span !!! Пол
        select
          option(disabled value="") Выберите один из вариантов
          option Муж
          option Жен
        //- p {{post[getId()].gender}}
    div(class="HB")
        span !!! Дата рождения
        input(type="date" value="[[post[getId()].registered]]" v-model='post[getId()].registered')
        //- p {{post[getId()].registered}}
  div(class="persData" v-if="post")    
    div(class="CNILS")
        span СНИЛС
        input(:placeholder="[[post[getId()].snils]]" type="number" v-model='post[getId()].snils')
    div(class="SerailPass")
        span Серия полиса
        input
    div(class="NomerPass")
        span Номер полиса
        input

  div(class="persData")     
    div(class="email")
        span электронная почта
        input(:placeholder="[[post[getId()].email]]" type="email" v-model='post[getId()].email')
    div(class="phone" )
        span номер телефона для связи
        input(:placeholder="[[post[getId()].phone]]" type="phone" v-model='post[getId()].phone')
     

  div(class="post" v-if="post")
    div(class="post__title") 
      h1 {{ post[getId()].title }}
    div(class="post__body") 
      p {{ post[getId()].body }}
    div(class="post__id")   
      p {{ post[getId()].id }}

</template>
<script>
import axios from 'axios';

export default {
   data() {
    return {
      post: null,
      endpoint: '.\\src\\db\\generated.json',
    }
  },

  methods: {
    getPost(id) {
      // console.log ( this.$route.params.id)
      axios.get(this.endpoint)
        .then(response => {
          this.post = response.data
        })
        .catch( error => {
          console.log(error)
        })
    },
    getId()
    {
      return (this.$route.params.id)?this.$route.params.id:'0'
    }
  },
    
  created() {
    this.getPost(this.$route.params.id);
    this.getId();
  },

  updated() {
    // console.log (this.post)
    this.getPost(this.$route.params.id);
    this.getId();
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



h1 
  color: green


.persData
  display: flex
  justify-content: center

.persData > div
  display: flex
  align-items: center 
  padding: 5px
  
div span 
  padding: 10px
</style>
