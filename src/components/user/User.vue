<template>
    <div>
        <h1>The user page</h1>
        <hr/>
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>