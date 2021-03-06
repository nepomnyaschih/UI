const API = require('../api/api.js');
const Plotly = require('plotly.js/lib/core');

export function createPlot() {
  let data = [
    {
      x: [],
      y: [],
      mode: 'lines',
      name: 'sensor 1',
      line: {color: '#80CAF6'}
    },
    {
      x: [],
      y: [],
      mode: 'lines',
      name: 'sensor 2',
      line: {color: '#f66ba6'}
    },
    {
      x: [],
      y: [],
      mode: 'lines',
      name: 'sensor 3',
      line: {color: '#78f65a'}
    },
    {
      x: [],
      y: [],
      yaxis: 'y2',
      mode: 'lines',
      name: 'sum',
      line: {color: '#8f8c8e'}
    }
  ];

  var layout = {
    yaxis: {
      title: 'Датчики',
      range: [0, 4096]
    },
    yaxis2: {
      title: 'Сумма',
      range: [0, data.length * 4096],
      titlefont: {color: '#8f8c8e'},
      tickfont: {color: '#8f8c8e'},
      overlaying: 'y',
      side: 'right'
    }
  };

  Plotly.plot('graph', data, layout);
}

export function updatePlot(data) {

  let sensors = Object.keys(data);

  sensors.forEach((sensorId, i) => {

    let convertedData = convertToPlotData(data[sensorId].data);

    let maxTime = Math.max.apply(null, convertedData.x);

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
