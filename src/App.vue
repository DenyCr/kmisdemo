<template>
  <div id="app">
    <header>

      <h1>{{ msg }}</h1>
    </header>
    <div class="main">
      <ListOfArmor />
      <Record />
    </div>
    <footer>
      <img src="./assets/logo.png">
    </footer>
  </div>
</template>

<script>
import Record from './components/Record.vue'
import ListOfArmor from './components/ListOfArmor.vue'

export default {
  name: 'app',
  components: {
    Record, 
    ListOfArmor
  },
  data () {
    return {
      msg: 'Добро пожаловать в систему бронирования номерка к специалисту',
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}



a {
  color: #42b983;
}

.main {
  display: grid;
  grid-template-columns: 22% auto
}

</style>
