<template lang="pug">
.test( v-if="$route.params" )
  //- h1 fdgdg {{ post[getId()] }}
  //- h1 {{this.$route.params}}
  //- span {{post}}
  div  
    
    .armLst(v-for="item in getArmors" )
      br
      span {{item.registered}}
      br
  div 
    .console
      button Записаться
      button Отменить бронь
    //- span {{company}} 
    //- br 
    //- span {{doctor}}
    
  //- div(class="persData" v-if="post")
    
  //-   .FIO
  //-     span ФИО 
  //-     input(:placeholder="[[post[getId()].name]]" v-model='post[getId()].name')
  //-   div(class="POL")
  //-       span !!! Пол
  //-       select
  //-         option(disabled value="") Выберите один из вариантов
  //-         option Муж
  //-         option Жен
  //-       //- p {{post[getId()].gender}}
  //-   div(class="HB")
  //-       span !!! Дата рождения
  //-       input(type="date" value="[[post[getId()].registered]]" v-model='post[getId()].registered')
  //-       //- p {{post[getId()].registered}}
  //- div(class="persData" v-if="post")    
  //-   div(class="CNILS")
  //-       span СНИЛС
  //-       input(:placeholder="[[post[getId()].snils]]" type="number" v-model='post[getId()].snils')
  //-   div(class="SerailPass")
  //-       span Серия полиса
  //-       input
  //-   div(class="NomerPass")
  //-       span Номер полиса
  //-       input

  //- div(class="persData")     
  //-   div(class="email")
  //-       span электронная почта
  //-       input(:placeholder="[[post[getId()].email]]" type="email" v-model='post[getId()].email')
  //-   div(class="phone" )
  //-       span номер телефона для связи
  //-       input(:placeholder="[[post[getId()].phone]]" type="phone" v-model='post[getId()].phone')
     

  //- div(class="post" v-if="post")
  //-   div(class="post__title") 
  //-     h1 {{ post[getId()].title }}
  //-   div(class="post__body") 
  //-     p {{ post[getId()].body }}
  //-   div(class="post__id")   
  //-     p {{ post[getId()].id }}

</template>
<script>
import axios from 'axios';

export default {
   data() {
    return {
      post: null,
      endpoint: '.\\src\\db\\generated.json',
      company: null,
      doctor: null,
      speciality: null,
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
  },
    
  created() {
    this.getPost(this.$route.params.comp);
    // this.getId();
  },

  computed: {

    getArmors: function() {
      if(this.$route.params != null){
        this.company =this.post.filter(post=> post.index == this.$route.params.comp)[0].company
        this.doctor = this.post.filter(post=> post.index == this.$route.params.comp)[0].doctors[0].name
        this.speciality = this.post.filter(post=> post.index == this.$route.params.comp)[0].doctors[0].speciality
        // console.log(this.post.filter(post=> post.index == this.$route.params.comp)[0])
        return this.post.filter(post=> post.index == this.$route.params.comp)[0].doctors[this.$route.params.id].visits
      }
    },


  },

  updated() {
    // console.log (this.post)
    this.getPost(this.$route.params.id);
    // this.getId();
  },
  watch: {
  '$route'() {
    // this.getPost(this.id);
  }
}
}
</script>
<style lang="sass" scoped>
.test
  background: #FFFFE4
  display: grid
  grid-template-columns: 30% auto

// .armLst 
//   display: grid;
//   grid-template-columns: 16% auto

.armLst
  background: #004A6c  /* Цвет фона */
  color: #fff /* Цвет текста */
  padding: 10px   /* Поля */  
  border-radius: 10px /* Уголки */
  margin-top: 15px  /* Отступ сверху */
  margin-left: 15px
  margin-all: 15 px
  // border: 2px solid #000 /* Параметры рамки */
  -moz-box-sizing: border-box /* Для Firefox */  
  box-sizing: border-box /* Ширина блока с полями */
  opacity: 0.7

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

button
  width: -webkit-fill-available
  background: #007E3E  /* Цвет фона */
  color: #fff /* Цвет текста */
  padding: 20px   /* Поля */  
  border-radius: 10px /* Уголки */
  margin-top: 10px  /* Отступ сверху */
  -moz-box-sizing: border-box /* Для Firefox */  
  box-sizing: border-box /* Ширина блока с полями */

.console
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
</style>
