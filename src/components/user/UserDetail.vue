<template>
    <div>
        <h3>Some User Details</h3>
        <hr/>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link 
                tag="button" 
                :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
                class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
    export default {
    }
</script>