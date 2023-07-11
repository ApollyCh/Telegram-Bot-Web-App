<script >
import AuditorySample from '@/components/AuditorySample.vue'

export default {
  name: 'ByHours'
}
</script>

<template>
  <div class="form-by-hour">
    <form>
      <p class="required">Start</p>
      <input
        class="form-control"
        type="datetime-local"
        placeholder="Select date and time"
        id="start"
        required
      />
      <p class="required">Duration</p>
      <select name="select" id="hours">
        <!--Supplement an id here instead of using 'name'-->
        <option value="hour1" selected>1 hour</option>
        <option value="hour2">2 hours</option>
        <option value="hour3">3 hours</option>
        <option value="hour4">4 hours</option>
        <option value="hour5">5 hours</option>
        <option value="hour6">6 hours</option>
        <option value="hour7">7 hours</option>
        <option value="hour8">8 hours</option>
      </select>
      <input class="btn" type="submit" value="Generate Rooms" />

    </form>
  </div>
</template>
<style scoped>
p {
  color: dimgrey;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 18px;
  padding-top: 20px;
}

.form-by-hour {
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
  margin-left: 171px;
}


.required:after {
  content: ' *';
  color: #d30000;
  font-weight: 100;
}


select {
  position: absolute;
  width: 150px;
  background-color:#f6f6f6;
  color:dimgrey;
  border: 0;
}
</style>
