<script>
import MainNavigatePanel from '@/components/Navigate panels/MainNavigatePanel.vue'
import ByDateForm from '@/components/Forms/ByDateForm.vue'
import ByHours from '@/components/Forms/ByHours.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'BookTheRoom',
  components: {
    ByHours,
    ByDateForm,
    MainNavigatePanel
  },
  setup() {
    const router = useRouter()
    const toFindFreeRoom = () => {
      console.log('Work')
      router.push({
        path: '/findFreeRooms'
      })
    }
    return {
      toFindFreeRoom
    }
  }
}
</script>

<template>
  <MainNavigatePanel></MainNavigatePanel>
  <div>
    <button class="btn" id="book-the-room" @click="toFindFreeRoom">Find free Rooms</button>
    <div class="message">
      <div class="text-message">
        <p>We are waiting for updates</p>
        <p>Keep in touch!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.btn-selector {
  position: relative;
  top: 120px;
  margin-left: calc(50vw - 165px);
}

#book-the-room {
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  background-color: #40ba21;
  width: 340px;
  height: 64px;
  position: relative;
  box-shadow: 0 4px 4px rgb(187, 187, 187);
  border-radius: 13px 13px 13px 13px;
  border: rgb(68, 68, 68);
  font-size: 18px;
  text-align: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  top: 90px;
}

.message {
  display: block;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  top: 200px;
  background-color: white;
  width: 85vw;
  height: 200px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 4px 4px #a4a4a4;
}


p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 20px;
  color: dimgrey;
}

.text-message {
  position: relative;
  top: 60px;
}

.btn:hover {
  box-shadow: 0 6px 6px #a4a4a4;
  cursor: pointer;
}
</style>