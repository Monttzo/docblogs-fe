<template>
  <div id="app" class="app">
    <nav class="nav">
      <div class="LogoBox" v-on:click="buttonHome" >
        <img src="../public/aid-kit1.png" class="logo">
        <h1>DocBlogs</h1>
      </div>
      <div class="ButtonLogInBox">
        <button v-on:click="buttonLogIn">Login</button>
      </div>
      <div class="NewPostBox">
        <button v-on:click="buttonNewPost">New Post</button>
      </div>
      <h1>This is an example menu</h1>
      <h1>Option 1</h1>
      <h1>Option 2</h1> 
    </nav>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function(){
    return {

    }
  },
  methods:{

  },
  created: function(){

  }
}
</script>
<style>
button {
  padding: 15px 10px;
  font-weight: bold;
  font-size: 16px;
  color:#8bd5cb;
  background-color: #516091;
  border-radius: 5px;
  border-width: 0px;
}
.NewPostBox {
  display: flex;
  position: absolute;
  right: 100px;
  width: fit-content;
}
.ButtonLogInBox {
  display: flex;
  position: absolute;
  right: 20px;
  width: fit-content;
}
.LogoBox {
  cursor: pointer;
  display: flex;
  width: fit-content;
  float: left;
  align-items: center;
}
.LogoBox h1 {
  padding: 0px 10px;
}
.logo {
  height: 45px;
  width: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #516091;
  background-color: #edfffa;
  margin: 0px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
body {
  margin: 0px;
}
.nav {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #8bd5cb;
  font-weight: bold;
  color: #516091;
}
.nav h1 {
  display: inline-block;
}
</style>
