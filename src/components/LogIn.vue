<template>
<section class="container">
    <section class="LogInContainer">

        <section class="title">
            <h1>Login</h1>
        </section> 

        <section class="form">
            <form v-on:submit.prevent="processLogIn">
                <input type="email" placeholder="email" v-model="user.email" required>
                <br>
                <input type="password" placeholder="password" v-model="user.password" required>
                <center><button type="submit" class="submit"><h4>Login</h4></button></center>
            </form>
        </section>

    </section>
</section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data: function(){
        return {
            user: {
                email:"",
                password:""
            }
            
        }
    },
    methods:{
    processLogIn: function(){
        axios.post(
                "http://127.0.0.1:8000/api/auth/login/",
                this.user
                )
                .then((result) => {
                    let dataLogIn = {
                        token_access: result.data.access_token,
                    }
                    this.$emit('completedLogIn', dataLogIn)
                })
                .catch((error) => {
                    if (error.response.status == "401")
                        alert("Incorrect Credentials.");
                });
        },
    },
    created: function(){

    }
}
</script>

<style>
.submit {
    margin: 10px 0px;
}
.form {
    display: flex;
    justify-content: center;
}
.container {
    color: #734444;
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
}
.LogInContainer {
    background-color: #eeedbe;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    width: 50%;
    margin: 20px 0px;
    padding: 20px;
}
</style>