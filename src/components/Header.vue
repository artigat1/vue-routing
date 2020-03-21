<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" exact-active-class="active" role="presentation"><a>Home</a></router-link>
        <router-link to="/user/1" tag="li" exact-active-class="active" role="presentation"><a>User 1</a></router-link>
        <router-link to="/user/2" tag="li" exact-active-class="active" role="presentation"><a>User 2</a></router-link>
    </ul>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>

</style>