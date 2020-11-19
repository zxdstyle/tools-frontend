<template>
    <router-view />
</template>
<script>
import { useStore } from "vuex"
export default {
    setup() {
        const store = useStore()

        document.getElementsByTagName("body")[0].className = `theme-${store.state.system.themeMode}`
    }
}
</script>

<style lang="scss"></style>
