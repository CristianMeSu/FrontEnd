<template>
    <body class="hold-transition sidebar-mini "> <!-- AdminLTE -->

        <router-view />
        <notifications group="foo" />

    </body>
</template>

<script>

export default {
    name: 'App'

    , components: {

    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
