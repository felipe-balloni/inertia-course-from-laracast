<template>
    <h1>Hello, I'm users page!</h1>

    <Nav />

    <div class="" style="margin-top: 400px">
        <p>the current time is {{ time }}</p>
        <Link href="/users" class="text-blue-500 hover:underline" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>

<script>
import Nav from '../Shared/Nav'
import { Link } from '@inertiajs/inertia-vue3'

export default {
    name: "Users",
    components: { Nav, Link },

    props: { time: String, }
}
</script>
