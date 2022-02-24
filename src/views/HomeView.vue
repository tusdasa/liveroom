<template>
  <div class="home">
    <LiveBanner></LiveBanner>
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    -->
    <!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
  </div>
</template>

<script>
import LiveBanner from "@/components/LiveBanner";
export default {
  name: 'HomeView',
  methods(){},
  components: {
    LiveBanner
  }
}
</script>
