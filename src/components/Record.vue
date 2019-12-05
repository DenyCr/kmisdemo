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
          span Специальность 
          input(:placeholder="[[speciality]]" type="speciality" v-model='speciality')
        .date
          span Дата приема
          input(type="date" value="[[getArmors[perem].registered]]" v-model='getArmors[perem].registered')

    .console
      button(v-if="perem != null" id="reg" @click="reg()") Записаться
      button(v-if="perem != null" id="edit" onclick="alert(this.innerHTML)") Изменить
      button(v-if="perem != null" id="cansel" @click="cansel()" ) Отменить бронь
    br 
      
    .win(v-if="(perem != null) && (regID)")
      h1 Вы, {{this.getArmors[this.perem].name}} записались на прием к {{this.speciality}} на {{this.getArmors[this.perem].registered}} число

      

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
      regID: null
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
    },
    reg(){
      if(!this.regID)
        this.regID=true

      return this.regID
    },
    cansel(){
      if(this.regID)
        this.regID=false

      return this.regID
    }
  },
    
  created() {
    this.getPost(this.$route.params.comp);
  },

  computed: {

    getArmors: function() {
      if(this.$route.params != null){
        let qqq = this.post.filter(post=> post.index == this.$route.params.comp)[0]        
        this.company =qqq.company
        this.doctor = qqq.doctors[0].name
        this.speciality = qqq.doctors[0].speciality
        // console.log(this.post.filter(post=> post.index == this.$route.params.comp)[0])
        return qqq.doctors[this.$route.params.id].visits
      }
    },


  },

  updated() {
    this.getPost(this.$route.params.id);
  },
  watch: {
}
}
</script>
<style lang="sass" scoped>
.test
  // background: #FFFFE4
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

.test > win
  display: grid
  grid-template-columns: auto

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
