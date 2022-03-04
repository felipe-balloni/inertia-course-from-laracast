<template>
        <h1 class="text-3xl font-bold">Hello, {{ name }}!</h1>

        <p>In this series, we will use the following frameworks</p>
        <ul class="list-disc">
            <li v-for="framework of frameworks" v-text="framework"></li>
        </ul>
</template>

<script>
import Layout from "../Shared/Layout";

export default {
    layout: Layout
}
</script>
