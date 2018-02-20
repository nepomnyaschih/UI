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

  const plot = require('../applicationPlot/applicationPlot');

  let intervalPlotUpdate;

  function mounted() {

    plot.createPlot();

    // intervalPlotUpdate = setInterval(function () {
    //   applicationPlot.updatePlot();
    // }, 100);
  }

  function created() {
    console.log('Main created');
  }

  function destroyed() {
    console.log('Main destroyed');
    clearInterval(intervalPlotUpdate);
  }


  export default {
    name: 'Main',
    mounted: mounted,
    created: created,
    destroyed: destroyed,
    methods: {
      clearData: function () {
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
