
export var pause = false;


var sensors = [];
export var data= [];

export var constants = {
  wsUri: 'ws://192.168.4.1/ws'
}

export function init() {
  sensors = [
    {
      device:0,
      id:0,
      port: 2,
      name: 'Первый датчик'
    },
    {
      device:0,
      id:1,
      port: 3,
      name: 'Второй датчик'
    }
  ];
};

export function addToData(newValues){
  data = [].concat(data,newValues);

  console.log("data counter: ", data.length);
}


export function clearData(){
  data = [];
}

export function getData() {
  return data;
};

export function getSensorsList() {
  return sensors;
};


export function togglePause() {
  pause = !pause;
};
