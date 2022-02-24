<template>
  <nav>
    <ul>
      <li>
        <!--
        <el-image style="baseline-shift: sub;"
                  src="https://www.tusdasa.net/favicon.ico"
                  fit="fit"
        ></el-image>
        -->
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/room">Room</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "LiveRoomNav"
}
</script>

<style scoped>
nav {
  height: 40px;
  width: 100%;
  margin: 5px auto 0 auto;
  line-height: 40px;
}

nav ul{
  list-style: none;
  display: flow;
}

nav ul li{
  float: left;
  width: 200px;
  height: 40px;
  display: block;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>