<template>
    <div>
        <h3>Edit the User</h3>
        <p>locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr/>
        <button class="btn btn-primary">Confirm</button>
        <div style="height:900px"/>
        <p id="data">Some extra data</p>
    </div>
</template>