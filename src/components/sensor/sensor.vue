<template>
<div>
  <b-button>
    получить данные
  </b-button>

  датчик

{{sensorsData}}

</div>
</template>

<script>

var api = require('../api/api.js');

export default {
  name: 'Sensor',
  data () {
    return {
      sensorsData: api.getData()
    }
  }
}

</script>
