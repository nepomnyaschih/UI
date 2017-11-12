
var sensors = [];
var data= [];


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


export function updateData(){
  data.push({1:getRandomValue(), 2:getRandomValue()});
}


export function getData() {
  return data;
};

export function getSensorsList() {
  return sensors;
};


function getRandomValue() {
  let min = 0;
  let max = 512;
  return Math.random() * (max - min) + min;
}
