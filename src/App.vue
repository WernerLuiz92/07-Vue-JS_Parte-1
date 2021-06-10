<template>
    <div class="body">
        <div class="container mx-auto">
            <button class="bg-green-500">Button</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .body {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: 0 auto;
    }
</style>