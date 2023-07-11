<script>
import AuditorySample from '@/components/AuditorySample.vue'

export default {
  name: 'ByDateForm'
}
</script>

<template>
  <div class="form-by-date">
    <form>
      <p class="required">Start</p>
      <input
        class="form-control"
        type="datetime-local"
        placeholder="Select date and time"
        id="start"
        required
      />
      <p class="required">End</p>
      <input
        class="form-control"
        type="datetime-local"
        placeholder="Select date and time"
        id="end"
        required
      />
      <input class="btn" type="submit" value="Generate Rooms" />
    </form>
  </div>

  <!--  <div class="all-rooms">-->
  <!--    <AuditorySample name="Lec 301" capacity="24"></AuditorySample>-->
  <!--    <AuditorySample name="Lec 301" capacity="24"></AuditorySample>-->
  <!--    <AuditorySample name="Lec 301" capacity="24"></AuditorySample>-->
  <!--    <AuditorySample name="Lec 301" capacity="24"></AuditorySample>-->
  <!--    <AuditorySample name="Lec 301" capacity="24"></AuditorySample>-->
  <!--  </div>-->
</template>
<style scoped>
p {
  color: dimgrey;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 18px;
  padding-top: 20px;
}

.form-by-date {
  position: relative;
  top: 90px;
  margin-left: calc(50vw - 165px);
}

.form-control {
  position: relative;
  width: 150px;
  background-color: #f6f6f6;
  color: dimgrey;
  border: 0;
}

.btn {
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  background-color: #40ba21;
  width: 148px;
  height: 64px;
  position: absolute;
  box-shadow: 0 4px 4px rgb(187, 187, 187);
  border-radius: 13px 13px 13px 13px;
  border: rgb(68, 68, 68);
  font-size: 18px;
  text-align: center;
  top: -25px;
  margin-left: 20px;
}


.required:after {
  content: ' *';
  color: #d30000;
  font-weight: 100;
}

.all-rooms {
  position: relative;
  margin-top: 120px;
}
</style>
