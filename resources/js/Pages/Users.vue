<template>
    <h1 class="text-3xl font-bold">Hello, I'm users page!</h1>

    <div class="" style="margin-top: 400px">
        <p>the current time is {{ time }}</p>
        <Link href="/users" class="text-blue-500 hover:underline" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'

export default {
        name: 'Users',

        props: {
            time: String,
        },

        components: {
            Link,
        }
    }
</script>
