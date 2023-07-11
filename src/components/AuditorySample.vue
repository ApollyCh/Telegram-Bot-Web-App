<script>
export default {
  name: 'AuditorySample',
  props: ['name', 'capacity']
}
</script>

<template>
  <div>
    <button class="rooms">{{name}} (x{{capacity}})</button>
  </div>
</template>

<style scoped>
.rooms {
  width: 328px;
  height: 30px;
  background-color: white;
  text-align: center;
  box-shadow: 0 4px 4px rgb(187, 187, 187);
  position: relative;
  margin-bottom: 15px;
  color: dimgrey;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 18px;
  border: 0;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.rooms:hover {
  box-shadow: 0 6px 6px #a4a4a4;
}
</style>
