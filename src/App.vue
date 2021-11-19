<template>
  <div id="app" class="app">
    <nav class="nav">

      <section class="LogoBox" v-on:click="buttonHome" >
        <img src="../public/aid-kit2.png" class="logo">
        <h1>DocBlogs</h1>
      </section>

      <section class="ButtonSignInBox" v-if="!isauth">
        <button v-on:click="buttonSignIn"><h4>Sign in</h4></button>
      </section>

      <section v-if="isauth" class="Welcometitle">
        <h1>Welcome {{username}}!</h1>
      </section>

      <section class="ButtonLogInBox" v-if="!isauth">
        <button v-on:click="buttonLogIn"><h4>Login</h4></button>
      </section>

      <section class="ButtonLogOutBox" v-if="isauth">
        <button v-on:click="buttonLogOut"><h4>Logout</h4></button>
      </section>

      <section class="NewPostBox" v-if="isauth">
        <button v-on:click="buttonNewPost"><img src="../public/plus1.png" class="icoButton"><h4>New Post</h4></button>
      </section>

      <section class="MyPostBox" v-if="isauth">
        <button v-on:click="buttonMyPost"><img src="../public/quotes-right1.png" class="icoButtonQuotes"><h4>My Posts</h4></button>
      </section>

    </nav>

    <section class="main-component">
      <router-view
      v-on:completedLogIn="completedLogIn"
      v-on:completedSignIn="completedSignIn"
      v-on:LoadMyPosts="buttonMyPost">
      </router-view>
    </section>

  </div>
</template>
<script>
export default {
  name: 'App',
  data: function(){
    return {
      username : localStorage.getItem("username"),
      isauth : localStorage.getItem("isAuth") || false,
    }
  },
  methods:{
    buttonHome: function(){
      this.$router.push({name: "LoadPosts"});
    },
    buttonLogIn: function(){
      this.$router.push({name: "LogIn"});
    },
    completedLogIn: function(data){
      localStorage.setItem("username", data.username);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token_access", data.token_access);
      alert("Succesfuly Autentication");
      this.buttonHome();
      window.location.reload()
    },
    completedSignIn: function(){
      alert("Registration successful, please LogIn");
      this.buttonLogOut();
    },
    buttonLogOut: function(){
      localStorage.clear();
      alert("Sesion closed");
      this.buttonHome();
      window.location.reload()
    },
    buttonMyPost: function(){
      this.$router.push({name: "MyPosts"});
    },
    buttonSignIn: function(){
      this.$router.push({name: "SignIn"});
    },
    buttonNewPost: function(){
      this.$router.push({name: "CreatePost"})
    },
  },
  created: function(){
    this.buttonHome();
  }
}
</script>
<style>
.main-component {
  padding: 100px 0px 0px 0px;
}
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
  color:#eeedbe;
  background-color: #734444;
  border-radius: 5px;
  border-width: 0px;
}
button:hover{
  border-width: 3px;
  border-style: solid;
  border-color:#734444;
  background-color: #eeedbe;
  color: #734444;
  transition:ease all 0.6s;
}
textarea {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color:#eeedbe;
  background-color: #734444;
  border-radius: 5px;
  border-width: 0px;
}
textarea:hover{
  border-width: 3px;
  border-style: solid;
  border-color:#734444;
  background-color: #eeedbe;
  color: #734444;
  transition:ease all 0.6s;
}
input {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  color:#eeedbe;
  background-color: #734444;
  border-radius: 5px;
  border-width: 0px;
}
input:hover{
  border-width: 3px;
  border-style: solid;
  border-color:#734444;
  background-color: #eeedbe;
  color: #734444;
  transition:ease all 0.6s;
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
.ButtonSignInBox {
  display: flex;
  position: absolute;
  right: 100px;
  width: fit-content;
}
.ButtonLogInBox {
  display: flex;
  position: absolute;
  right: 25px;
  width: fit-content;
}
.ButtonLogOutBox {
  display: flex;
  position: absolute;
  right: 20px;
  width: fit-content;
}
.LogoBox {
  position: absolute;
  left: 50px;
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
  font-family: 'Shippori Antique', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeedbe;
  background-color: #734444;
  margin: 0px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
body {
  margin: 0px;
}
.nav {
  height: 60px;
  width: 100%;
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #c37857;
  font-weight: bold;
  color: #eeedbe;
}
.nav h1 {
  display: inline-block;
}
</style>
