const plot = require('../applicationPlot/applicationPlot');


export var pause = false;

export var data = {};

export var constants = {
  wsUri: 'ws://192.168.4.1/ws',
  plotRange: 20*1000
};

export function init() {

}

export function addToData(newData) {
  // data = [].concat(data, newValues);

  // let sensors = Object.keys(newData);
  //
  // sensors.forEach((sensorId) => {
  //
  //   if (!data.hasOwnProperty(sensorId)) {
  //     data[sensorId] = {
  //       port: newData[sensorId].port,
  //       data: []
  //     };
  //   }
  //
  //   let sensorData = data[sensorId].data;
  //   sensorData = [].concat(sensorData, newData[sensorId].data);
  //   data[sensorId].data = sensorData;
  // });

  if (!pause) plot.updatePlot(newData);
}


export function clearData() {
  data = [];
}

export function getData() {
  return data;
}

export function togglePause() {
  pause = !pause;
}
