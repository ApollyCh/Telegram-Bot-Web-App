<script>
import { RouterLink, RouterView } from 'vue-router'
import MainNavigatePanel from '@/components/Navigate panels/MainNavigatePanel.vue'

export default {
  name: 'App',
  components: { MainNavigatePanel, RouterView }
}
</script>

<template>
  <RouterView></RouterView>
</template>
