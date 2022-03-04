<template>
    <nav class="ml-6">
        <ul class="flex space-x-6">
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
                <Link href="/logout" method="post" as="button" class="text-black hover:underline">Log Out</Link>
            </li>
        </ul>
    </nav>
</template>

<script>
import NavItem from '../Shared/NavItem'

export default {
    components: {
        NavItem
    }
}
</script>
