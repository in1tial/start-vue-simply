<template>
    <div id="app">
        <h1>hello {{ msg }}!</h1>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            msg: "Blog",
        }
    }

}
</script>

<style>
    h1{
        color: #667;
    }
</style>
