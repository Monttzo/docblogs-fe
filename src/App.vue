<template>
  <div id="app" class="app">
    <nav class="nav">

      <section class="LogoBox" v-on:click="buttonHome" >
        <img src="../public/aid-kit1.png" class="logo">
        <h1>DocBlogs</h1>
      </section>

      <section class="ButtonLogInBox">
        <button v-on:click="buttonLogIn"><h4>Login</h4></button>
      </section>

      <section class="NewPostBox">
        <button v-on:click="buttonNewPost"><img src="../public/plus1.png" class="icoButton"><h4>New Post</h4></button>
      </section>

      <section class="MyPostBox">
        <button v-on:click="buttonMyPost"><img src="../public/quotes-right1.png" class="icoButtonQuotes"><h4>My Posts</h4></button>
      </section>

    </nav>

    <section class="main-component">
      
    </section>

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
h4 {
  display: inline-block;
}
button {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  height: 50px;
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
.MyPostBox {
  display: flex;
  position: absolute;
  right: 250px;
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
.icoButtonQuotes {
  padding: 0px 10px;
  height: 15px;
  width: 19px;
}
.icoButton {
  padding: 0px 10px;
  height: 19px;
  width: 19px;
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
