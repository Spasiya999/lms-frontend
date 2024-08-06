<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from './components/Header/AppHeader.vue';
import AppFooter from './components/Footer/AppFooter.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>