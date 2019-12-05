<template lang="pug">
.test( v-if="$route.params" )
  div  
    h1 Список номерков 
    .armLst(v-for="item in getArmors" )
      button(v-on:click="perem = item.id") {{item.registered}} 
  div 
    br
    .from
      .persData(v-if="perem != null")
        .FIO
          span ФИО 
          input(:placeholder="[[getArmors[perem].name]]" v-model='getArmors[perem].name')
        .POL
          span Пол
          select
            option(disabled value="") Выберите один из вариантов
            option Муж
            option Жен 
              
        .CNILS
          span СНИЛС
          input(:placeholder="[[getArmors[perem].snils]]" type="number" v-model='getArmors[perem].snils')
        .SerailPass
          span Серия полиса
          input
        .NomerPass
          span Номер полиса
          input 
        .email
          span электронная почта
          input(:placeholder="[[getArmors[perem].email]]" type="email" v-model='getArmors[perem].email')
        .phone
          span номер телефона для связи
          input(:placeholder="[[getArmors[perem].phone]]" type="phone" v-model='getArmors[perem].phone')
      .compData(v-if="perem != null")
        .comp
          span Выбранная организация:
          input(:placeholder="[[company]]" type="company" v-model='company')
        .doct
          span Выбранный специалист
          input(:placeholder="[[doctor]]" type="doctor" v-model='doctor')
        .spec
          span Терапевт 
          input(:placeholder="[[speciality]]" type="speciality" v-model='speciality')
        .date
          span Дата приема
          input(type="date" value="[[getArmors[perem].registered]]" v-model='getArmors[perem].registered')

    .console
      button( id="reg" ) Записаться
      button( id="edit" onclick="alert(this.innerHTML)") Изменить
      button( id="cansel" ) Отменить бронь
    br 
      



      

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
      perem: null,
    }
  },

  methods: {
    getPost(id) {
      axios.get(this.endpoint)
        .then(response => {
          this.post = response.data
        })
        .catch( error => {
          console.log(error)
        })
    },
    getArmLst(id) {
      Console.log("ID = ", id)
      return id
    }
  },
    
  created() {
    this.getPost(this.$route.params.comp);
  },

  computed: {

    getArmors: function() {
      if(this.$route.params != null){
        // this.company =this.post.filter(post=> post.index == this.$route.params.comp)[0].company
        // this.doctor = this.post.filter(post=> post.index == this.$route.params.comp)[0].doctors[0].name
        // this.speciality = this.post.filter(post=> post.index == this.$route.params.comp)[0].doctors[0].speciality
        // console.log(this.post.filter(post=> post.index == this.$route.params.comp)[0])
        return this.post.filter(post=> post.index == this.$route.params.comp)[0].doctors[this.$route.params.id].visits
      }
    },


  },

  updated() {
    this.getPost(this.$route.params.id);
  },
  watch: {
 '$edit'(){
   alert("изменить?")
 }
}
}
</script>
<style lang="sass" scoped>
.test
  background: #FFFFE4
  display: grid
  grid-template-columns: 20% auto



.armLst button
  background: #004A6c  /* Цвет фона */
  color: #fff /* Цвет текста */
  padding: 10px   /* Поля */  
  border-radius: 10px /* Уголки */
  margin-top: 15px  /* Отступ сверху */
  margin-left: 15px
  margin-right: 15 px
  // border: 2px solid #000 /* Параметры рамки */
  -moz-box-sizing: border-box /* Для Firefox */  
  box-sizing: border-box /* Ширина блока с полями */
  opacity: 0.7
  font-size: 1.2rem

h1 
  color: green
  
.from 
  display: grid
  grid-template-columns: auto auto
.form div
  display: grid
  grid-template-columns: fit-content(50%) fit-content(50%)


.compData > div
  display: flex
.persData > div
  display: flex
  disabled
span 
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
  display: none
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
</style>
