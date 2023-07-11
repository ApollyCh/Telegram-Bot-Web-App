<script>
import MainNavigatePanel from '@/components/Navigate panels/MainNavigatePanel.vue'
import ByDateForm from '@/components/Forms/ByDateForm.vue'
import ByHours from '@/components/Forms/ByHours.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'FindFreeRoom',
  components: {
    ByHours,
    ByDateForm,
    MainNavigatePanel
  },
  setup() {
    const router = useRouter()
    const toBookTheRoom = () => {
      console.log('Work')
      router.push({
        path: '/bookTheRoom'
      })
    }
    return {
      toBookTheRoom
    }
  },
  data() {
    return {
      currentComponent: 'ByDate',
      DateColor: '#44e81d',
      HourColor: '#40ba21'
    }
  },
  methods: {
    showByDate() {
      this.currentComponent = 'ByDate'
      this.DateColor = '#44e81d'
      this.HourColor = '#40ba21'

      console.log(this.currentComponent)
    },
    showByHour() {
      this.currentComponent = 'ByHour'
      this.HourColor = '#44e81d'
      this.DateColor = '#40ba21'
      console.log(this.currentComponent)
    }
  }
}
</script>

<template>
  <MainNavigatePanel></MainNavigatePanel>
  <div>
    <button class="btn" id="book-the-room" @click="toBookTheRoom">Book the Room</button>
  </div>

  <div class="btn-selector">
    <button
      class="little_button"
      id="by-date"
      @click="showByDate"
      :style="{ backgroundColor: DateColor }"
    >
      By date
    </button>
    <button
      class="little_button"
      id="by-hours"
      @click="showByHour"
      :style="{ backgroundColor: HourColor }"
    >
      By hours
    </button>
  </div>
  <ByDateForm v-if="currentComponent === 'ByDate'"></ByDateForm>
  <ByHours v-else-if="currentComponent === 'ByHour'"></ByHours>
</template>

<style scoped>
.btn-selector {
  position: relative;
  top: 120px;
  margin-left: calc(50vw - 165px);
}

.little_button {
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  background-color: #40ba21;
  width: 70px;
  height: 30px;
  position: relative;
  border-radius: 0;
  border: rgb(68, 68, 68);
  font-size: 10px;
  text-align: center;
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

</style>