<template>
    <Head>
        <title>Home</title>
        <meta
            type="description"
            content="Home information"
            head-key="description"
        >
    </Head>

    <h1 class="text-3xl font-bold">Hello, {{ name }}!</h1>

    <p>In this series, we will use the following frameworks</p>
    <ul class="list-disc">
        <li v-for="framework of frameworks" v-text="framework"></li>
    </ul>
</template>

<script>
export default {
    name: 'Home',
    props: {
        name: String,
        frameworks: Array,
    }
}
</script>
