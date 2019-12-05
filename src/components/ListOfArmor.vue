<template lang="pug">
.test
  
  aside(class="sidebar")
    .MO
      p МО
      select(v-model="selectedCompany")
        option(v-for="sel in selected"  v-bind:value="sel.id" v-bind:company="sel.company") {{ sel.company }} 
    //- button Записаться
    h1 Список специалистов 
    .DostorsList
      router-link(
        v-for="post in getDoctors"
        active-class="in-active"
        class="link"
        :to="{ name: 'post', params: { id: post.id, comp: selectedCompany} }"
        ) 
        .armor {{post.speciality}} - {{ post.name }}           
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
    }
  },
  computed: {
    getDoctors: function () {
      if (this.selectedCompany != null){
        return  this.posts.filter(post=> post.index == this.selectedCompany)[0].doctors
      }
    },

  },

  created() {
    this.getAllPOsts();
  },

  methods: {
    getAllPOsts() {
      axios.get(this.endpoint)
        .then(Response => {
          this.posts = Response.data;
          this.selected = this.posts.map(post=> 
            {          return {id: post.index, company: post.company}} ); 
        })
        .catch(Error => {
          console.log('---------error----------');
          console.log(Error);
        })
    },
    // getDoctorsArmLst: function (post) {      
    //   if(this.armorlistactiv)
    //     this.armorlistactiv=false
    //   else this.armorlistactiv=true

    //   return this.armorlistactiv
    // }


  }

}
</script>
<style lang="sass" scoped>
.MO
  display: flex
  justify-content: center
  // padding: 10px
.test
  display: flex

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
  -moz-box-sizing: border-box /* Для Firefox */  
  box-sizing: border-box /* Ширина блока с полями */


button
  width: -webkit-fill-available
  background: #007E3E  /* Цвет фона */
  color: #fff /* Цвет текста */
  padding: 20px   /* Поля */  
  border-radius: 10px /* Уголки */
  margin-top: 10px  /* Отступ сверху */
  -moz-box-sizing: border-box /* Для Firefox */  
  box-sizing: border-box /* Ширина блока с полями */

div p 
  padding: 10px

</style>
