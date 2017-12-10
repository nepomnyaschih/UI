<template>
<div class="layout">

  <div id="graph"></div>

  <div class="layout">
    <b-button @click="clearData()">
      очистить
    </b-button>

    <b-button @click="pause()">
      пауза
    </b-button>
  </div>

  <div class="layout">

  </div>

</div>
</template>

<script>
var API = require('../api/api.js');
import Dygraph from 'dygraphs';

var g;

function mounted() {

  var data = [
    [0, 0]
  ];

  g = new Dygraph(
    document.getElementById("graph"), data, {
      drawPoints: false
    });
}

function created() {
  console.log('Main created');

  window.intervalId = setInterval(function() {
    let plotData = API.getData()
    if (plotData && plotData.length > 0)
      g.updateOptions({
        'file': plotData
      });
  }, 500);


}


export default {
  name: 'Main',
  mounted: mounted,
  created: created,
  methods: {
    clearData: function() {
      API.clearData();
    },
    pause: () => {
      API.togglePause();
    }
  }
}
</script>

<style>
.layout {
  margin: 10px;
}
</style>
