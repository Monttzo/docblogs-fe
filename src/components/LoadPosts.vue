<template>
<section class="search" v-bind:style="StyleSearch">
    <h4>Search by date</h4>
    <form v-on:submit.prevent="processSearch">
        <input type="date" v-model="search.date" required>
        <button type="submit" class="submit">Search</button>
    </form>
    <button class="buttonRemove" v-on:click="LoadPosts">Remove filters</button>
</section>
<center><img src="../../public/giphy.gif" v-bind:style="Style"></center>
<section v-for="post in posts.slice().reverse()" :key="post.id" class="containerPost">
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
import axios from 'axios';
export default {
    name: 'LoadPosts',
    data: function(){
        return {
            posts: [],
            Style: {
                display:'none',
                margin: '2% 0px'
            },
            StyleSearch: {
                display: 'inline_flex'
            },
            search: {
                date:""
            }
        }
    },
    methods:{ 
        LoadPosts: function(){
            this.Style.display = 'flex';
            this.StyleSearch.display = 'none';
            axios.get("http://localhost:8000/api/auth/posts/").then((result)=>{
                this.posts = result.data;
                this.Style.display = 'none';
                this.StyleSearch.display = 'inline-flex';
            })
        },
        processSearch: function(){
            this.Style.display = 'flex';
            this.StyleSearch.display = 'none';
            axios.post("http://localhost:8000/api/auth/posts/search",this.search).then((result)=>{
                this.posts = result.data;
                this.Style.display = 'none';
                this.StyleSearch.display = 'inline-flex';
            })
        }    
    },
    created: function(){
        this.LoadPosts();
    }
}
</script>

<style>
.search {
    justify-content: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    color: #734444;
    background-color: #eeedbe;
    align-content: center;
    width: 60%;
}
.search h4 {
    display:flex;
}
.search input {
    margin: 0px 20px;
    align-self: center;
    display: flex;
}
.search form{
    display: flex;
}
.search .buttonRemove {
    margin: 0px 20px;
    align-self: center;
    display: flex;
}
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
    color: #734444;
    background-color: #eeedbe;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    width: 60%;
    margin: 20px 0px;
    padding: 20px;
}
.date .created_at{
    float: right;
}
.date .user_name{
    float: left;
}
.date {
    border-width: 0px;
    border-top-width: 2px;
    border-style: solid;
}
.date h1 {
    display: inline-flex;
    padding: 10px 0px;
    margin: 10px;
    border-width: 0px;
}
</style>