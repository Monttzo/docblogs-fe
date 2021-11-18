<template>
<section v-for="post in posts" :key="post.id" class="containerPost">
    <section class="post">

        <section class="title">
            <h1>{{post.title}}</h1>
        </section>

        <section class="description">
            <p>{{post.description}}</p>
        </section>

        <section class="date">
            <h1>{{post.created_at.substring(0,10)}}</h1>
        </section>
    </section>
</section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoadPosts',
    data: function(){
        return {
            posts: [],
        }
    },
    methods:{
        LoadPosts: function(){
            axios.get("http://localhost:8000/api/auth/posts/").then((result)=>{
                console.log(result.data);
                this.posts = result.data;
            })
        }
    },
    created: function(){
        this.LoadPosts();
    }
}
</script>

<style>
.containerPost {
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
}
.title h1 {
    margin: 10px;
    font-size: 30px;
    border-width: 0px;
    border-bottom-width: 2px;
    border-style: solid;
}
.description {
    text-align: left;
    margin: 0px;
}
.description p {
    margin: 20px 10px;
    font-size: 20px;
}
.post {
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    width: 60%;
    margin: 20px 0px;
    padding: 20px;
}
.date {
    text-align: right;
}
.date h1 {
    padding: 10px 0px;
    margin: 10px;
    border-width: 0px;
    border-top-width: 2px;
    border-style: solid;
}
</style>