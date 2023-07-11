<script>
import { defineComponent } from 'vue'
import MainNavigatePanel from '@/components/Navigate panels/MainNavigatePanel.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { MainNavigatePanel },
  setup() {
    const router = useRouter()
    const toFindRooms = () => {
      router.push({
        path: '/findFreeRooms'
      })
    }
    const toBookTheRoom = () => {
      router.push({
        path: '/bookTheRoom'
      })
    }
    return {
      toFindRooms,
      toBookTheRoom
    }
  }
})
</script>

<template>
  <MainNavigatePanel></MainNavigatePanel>

  <div class="container">
    <div class="main_buttons">
      <div>
        <button class="btn" id="num1" @click="toFindRooms">Find free Rooms</button>
      </div>
      <div>
        <button class="btn" id="num2" @click="toBookTheRoom">Book the Room</button>
      </div>
    </div>
    <div></div>
  </div>
  <img src="../assets/logo.png" alt="logo" id="logo" />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.main_buttons {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-top: 160px;
}

.btn {
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  background-color: #40ba21;
  width: 277px;
  height: 72px;
  position: relative;
  border: 0;
  box-shadow: 0 4px 4px rgb(187, 187, 187);
  border-radius: 13px 13px 13px 13px;
  border: rgb(68, 68, 68);
  font-size: 18px;
  text-align: center;
  margin-bottom: 35%;
}

#logo {
  position: relative;
  width: 160px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  top: 140px;
}
</style>
