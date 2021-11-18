<template>
<section class="container">
    <section class="LogInContainer">

        <section class="title">
            <h1>Login</h1>
        </section> 

        <section class="form">
            <from>
                <input type="email" placeholder="email" v-model="user.email" required>
                <br>
                <input type="password" placeholder="password" v-model="user.password" required>
                <button type="submit"><h1>Login</h1></button>
            </from>
        </section>

    </section>
</section>
</template>

<script>
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

    },
    created: function(){

    }
}
</script>

<style>
.form {
    display: flex;
    justify-content: center;
}
.container {
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
}
.LogInContainer {
    width: 50%;
}
</style>