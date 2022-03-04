<template>
    <nav class="mt-6">
        <ul class="list-disc">
            <li>
                <NavItem href="/" :active="$page.component === 'Home'">Home</NavItem>
            </li>
            <li>
                <NavItem href="/users" :active="$page.component === 'Users'">Users</NavItem>
            </li>
            <li>
                <NavItem href="/settings" :active="$page.component === 'Settings'">Settings</NavItem>
            </li>
            <li>
                <Link href="/logout" method="post" as="button" class="text-blue-500 hover:underline">Log Out</Link>
            </li>
        </ul>
    </nav>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'
import NavItem from '../Shared/NavItem'

export default {
    name: "Nav",
    components: {Link, NavItem},
}
</script>
