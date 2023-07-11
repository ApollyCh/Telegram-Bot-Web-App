<script>

import { useRouter } from "vue-router";

export default {
  name: 'MainNavigatePanel',
  setup() {
    const router = useRouter()
    const toMain = () => {
      router.push({
        path: '/'
      })
    }
    return {
      toMain
    }
  }
}

</script>

<template>
  <div class="container">
    <button class="heading" @click="toMain">IU Booking Room</button>
  </div>
</template>

<style scoped>
.container {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.heading {
  width: 100%;
  height: 71px;
  border-radius: 0 0 13px 13px;
  background-color: #40ba21;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-shadow: 0 4px 4px rgb(113, 113, 113);
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
  border: 0;
}
</style>
