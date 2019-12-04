<template lang="pug">
.test
  
  aside(class="sidebar")
    //- span {{selected}}
    //- br
    .MO
      p МО
      select(v-model="selectedCompany")
        option(v-for="sel in selected"  v-bind:value="sel.id" v-bind:company="sel.company") {{ sel.company }} 
    br     
    span {{selectedCompany}}
    //- button Записаться
    h1 Список номерков 
    //- &nbsp;
    .DostorsList
      //- span {{getDoctors}}
      router-link(
        v-for="post in getDoctors"
        active-class="in-active"
        class="link"
        :to="{ name: 'post', params: { id: post.id, comp: selectedCompany} }"
        ) 
        .armor(v-on:click="getDoctorsArmLst()") {{post.speciality}} - {{ post.name }}  
        //- span {{armorlistactiv}} 
        //- div(:class="{}" v-on:click="getDoctorsArmLst(post)") 
        //-   span {{post.id}}
        //-   p ФИО - {{ post.name }} <br> специализация - {{post.speciality}}
          //- .armLst(v-if="getArmors" v-for="item in getArmors")
          //-   br
          //-   span {{item.registered}}
          //-   br

        //- span {{armorlistactiv}}
        br
  div(class="content")
    router-viev
</template>
<script>
import axios from 'axios'
import { functionExpression } from 'babel-types';

export default {
  props: ['id'],
  data () {
    return { 
      posts: null,
      endpoint: '.\\src\\db\\generated.json',
      selected: [],
      selectedCompany: null,
      // armorlistactiv: false,
      // ckickDoct: null
      // userPost: []
    }
  },
  computed: {
    getDoctors: function () {
      if (this.selectedCompany != null){
        // console.log('getDoctors: ', this.posts.filter(post=> post.index == this.selectedCompany));
        return  this.posts.filter(post=> post.index == this.selectedCompany)[0].doctors
      }
    },
    // getArmors: function() {
    //   if(this.ckickDoct != null){
    //     return this.ckickDoct.visits
    //     // this.posts.filter(post=> post.index == this.selectedCompany)[this.&&]);
    //   }
    // }

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
    getDoctorsArmLst: function (post) {      
      // console.log('armorlistactiv: ', armorlistactiv );
      // console.log(post)
      // this.ckickDoct=post
      if(this.armorlistactiv)
        this.armorlistactiv=false
      else this.armorlistactiv=true

      return this.armorlistactiv
    }


  }

}
</script>
<style lang="sass" scoped>
.MO
  display: flex
  justify-content: center
  padding: 10px
.test
  display: flex
  // width: 100%

.DostorsList
  // background: blue
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

.armLst
  background: red  /* Цвет фона */
  color: #fff /* Цвет текста */
  padding: 20px   /* Поля */  
  border-radius: 10px /* Уголки */
  margin-top: 10px  /* Отступ сверху */
  border: 2px solid #000 /* Параметры рамки */
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
