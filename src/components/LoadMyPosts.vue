<template>
<center><img src="../../public/giphy.gif" v-bind:style="Style"></center>
<section v-for="post in posts" :key="post.id" class="containerPost">
    <section class="post">

        <section class="title">
            <h1>{{post.title}}</h1>
        </section>

        <section class="description">
            <p>{{post.description}}</p>
        </section>

        <section class="date">
            <h1 class="user_name">{{post.user_name}}</h1> 
            <h1 class="created_at">{{post.created_at.substring(0,10)}}</h1>
        </section>
    </section>
</section>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';

export default {
    name: 'MyPosts',
    data: function(){
        return {
           posts: [],
           Style: {
                display:'none',
                margin: '2% 0px'
            }
        }
    },
    methods:{
        LoadMyPosts: function(){
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).sub.toString();
            console.log(userId);
            this.Style.display = 'flex';
            axios.post(
                `http://127.0.0.1:8000/api/auth/posts/myposts/${userId}`)
                .then((result) => {
                    this.posts = result.data;
                    this.Style.display = 'none';
                })
        }
    },
    created: function(){
        this.LoadMyPosts();
    }
}
</script>

<style>

</style>