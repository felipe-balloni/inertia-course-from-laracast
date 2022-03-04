import {createApp, h} from 'vue'
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3'
import {InertiaProgress} from '@inertiajs/progress'
import Layout from './Shared/Layout'

createInertiaApp({
    resolve: async name => {
        const page = (await import(`./Pages/${name}`)).default
        page.layout = page.layout || Layout
        return page
    }, setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el)
    },
    title: title => `My App - ${title}`,
})

InertiaProgress.init({
    delay: 250,
    color: '#29d',
    includeCSS: true,
    showSpinner: true,
})
