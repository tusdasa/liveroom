<template>
  <div class="nav">
    <LiveNav></LiveNav>
  </div>
  <div>
    <router-view/>
  </div>
</template>

<script>
import LiveNav from "@/components/LiveNav";
export default {
  components: {
    LiveNav
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
.nav{
  width: 100%;
  min-width: 1600px;
}
</style>
