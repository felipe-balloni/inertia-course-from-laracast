<template>
    <h1 class="text-4xl font-bold">Hello, {{ name }}!</h1>

    <Nav />

    <p>In this series, we will use the following frameworks</p>
    <ul>
        <li v-for="framework of frameworks" v-text="framework"></li>
    </ul>

</template>

<script>
import Nav from '../Shared/Nav'

export default {
    name: "Home",
    props: {
        name: String,
        frameworks: Array,
    },
    components: { Nav },
}
</script>
