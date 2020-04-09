<template>
    <div>
        <h3>Edit the User</h3>
        <p>locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr/>
        <button @click="confirmed = true" class="btn btn-primary">Confirm</button>
        <div style="height:900px"/>
        <p id="data">Some extra data</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },

        beforeRouteLeave(to, from, next) {
            if (this.confirmed) {
                next()
            } else {
                if (confirm('Are you sure?')) {
                    next()
                } else {
                    next(false)
                }
            }
        },

        methods: {}
    }
</script>