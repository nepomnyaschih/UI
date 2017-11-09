<template>
<div>

  <h2>Настройки</h2>

  <h3>Подключённые датчики</h3>
  <b-table striped hover :items="sensors"></b-table>

</div>
</template>

<script>

const sensors = [
  { isActive: true,  age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true,  age: 38, last_name: 'Carney' }
];

export default {
  name: 'Settings',
  data () {
    return {
      sensors: sensors
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
