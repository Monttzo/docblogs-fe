<template>
<section class="container">
    <section class="SignInContainer">

        <section class="title">
            <h1>Sign in</h1>
        </section> 

        <section class="form">
            <form v-on:submit.prevent="processSignIn">
                <input type="text" placeholder="username" v-model="user.username" required>
                <br>
                <input type="password" placeholder="password" v-model="user.password" required>
                <br>
                <input type="name" placeholder="name" v-model="user.name" required>
                <br>
                <input type="email" placeholder="email" v-model="user.email" required>
                <br>
                <input type="number" placeholder="age" v-model="user.age" required>
                <br>
                <center><button type="submit" class="submit"><h4>SignIn</h4></button></center>
            </form>
        </section>

    </section>
</section>  
</template>

<script>
import axios from 'axios';
export default {
    name: "LoadSignIn",
    data: function(){
        return{
            user: {
                username:"",
                password:"",
                name:"",
                email:"",
                age:0,
                type:"Member"
            }
        }
    },
    methods:{
        processSignIn: function(){
            let name = this.user.name;
            if(!isNaN(name) || this.user.age < 18){
                alert('Datos incorrectos');
            } else {
                axios.post(
                    "http://localhost:8000/api/auth/register",
                    this.user,
                    {headers: {}})
                    .then((result) => {
                        let dataSignUp = {
                            username: this.user.username,
                            token_access: result.data.token_access,
                        }
                        this.$emit('completedSignIn', dataSignUp)
                    })
                    .catch((error) => {
                        console.log(error)
                        alert("Registration Error.");

                    });
            }

        }
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
.SignInContainer {
    background-color: #eeedbe;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    width: 50%;
    margin: 20px 0px;
    padding: 20px;
}
</style>