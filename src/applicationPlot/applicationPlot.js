const API = require('../api/api.js');
const Plotly = require('plotly.js/lib/core');

export function createPlot() {
  let data = [
    {
      x: [],
      y: [],
      mode: 'lines',
      line: {color: '#80CAF6'}
    },
    {
      x: [],
      y: [],
      mode: 'lines',
      line: {color: '#f66ba6'}
    },
    {
      x: [],
      y: [],
      mode: 'lines',
      line: {color: '#78f65a'}
    }];

  Plotly.plot('graph', data);
}

export function updatePlot(data) {

  let sensors = Object.keys(data);

  sensors.forEach((sensorId, i) => {

    let convertedData = convertToPlotData(data[sensorId].data);

    let maxTime = Math.max.apply(null,convertedData.x);

    let olderTime = maxTime - API.constants.plotRange;
    let futureTime = maxTime;

    let minuteView = {
      xaxis: {
        range: [olderTime, futureTime]
      }
    };

    Plotly.relayout('graph', minuteView);

    let update = {
      x: [convertedData.x],
      y: [convertedData.y]
    };

    Plotly.extendTraces('graph', update, [i]);

  });
}

function convertToPlotData(data) {
  let plotX = [];
  let plotY = [];

  data.forEach((item) => {
    plotX.push(item.time);
    plotY.push(item.value);
  });

  return {x: plotX, y: plotY};
}
