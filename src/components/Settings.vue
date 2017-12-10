<template>
<div>

  <h3>Тут какая то настройка</h3>

</div>
</template>

<script>
var api = require('../api/api.js');

export default {
  name: 'Settings',
  data() {
    return {
      sensors: api.getSensorsList(),
      api: api
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
