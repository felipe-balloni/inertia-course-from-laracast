<template>
    <Link href="/"
          class="text-blue-500 hover:underline"
          :class="{ 'font-bold underline': active }"
    >
        <slot/>
    </Link>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'

export default {
    name: "NavItem",
    components: {Link,},
    props: {
        active: Boolean,
    }
}
</script>
