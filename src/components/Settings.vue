<template>
<div>

  <h3>Подключённые датчики</h3>
  <b-table striped hover :items="sensors"></b-table>

</div>
</template>

<script>


var api = require('../api/api.js');

export default {
  name: 'Settings',
  data () {
    return {
      sensors: api.getSensorsList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
