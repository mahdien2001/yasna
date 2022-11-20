<template>
<v-app>
  <div v-if="this.$store.state.progress" id="progress">
    <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
  </div>

    <!-- navbar -->
    <navbar></navbar>
    <!-- main -->
    <v-main>
        <router-view></router-view>
    </v-main>
</v-app>
</template>

<style>
#progress{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.854);
    z-index: 10;
}
</style>

<script>
import navbar from './components/navbar.vue'

export default {
    name: 'App',
    components: {
        navbar
    },

};
</script>
