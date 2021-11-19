<template>
<section class="container">
    <section class="NewPostContainer">

        <section class="title">
            <h1>New Post</h1>
        </section> 

        <section class="form">
            <form v-on:submit.prevent="processNewPost">
                <input type="text" placeholder="title" v-model="post.title" required>
                <br>
                <textarea rows="10" cols="60" name="description" placeholder="description" v-model="post.description" required/>
                <br>
                <center><button type="submit" class="submit"><h4>New Post</h4></button></center>
            </form>
        </section>

    </section>
</section>  
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';

export default {
    name: 'CreatePost',
    data: function(){
        return {
            post: {
                title:"",
                description:"",
                user_id:0,
                user_name: localStorage.getItem("username")
            }
        }
    },
    methods:{
        processNewPost: function(){
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).sub.toString();
            this.post.user_id = userId;
            axios.post(
                    "http://localhost:8000/api/auth/posts/create", this.post)
                    .then(() => {
                        alert('¡Post created!');
                        this.$emit('LoadMyPosts');
                    })
                    .catch((error) => {
                        console.log(error)
                        alert("Creation Error.");

                    });
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
.NewPostContainer {
    background-color: #eeedbe;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    width: 50%;
    margin: 20px 0px;
    padding: 20px;
}
</style>