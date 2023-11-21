<script setup>
import theme from "@/helpers/theme.js";
import { computed } from "vue";

const toggleTheme = () => {
    const mode = localStorage.theme;
    switch (mode) {
        case 'light':
            theme('dark');
            break;
        case 'dark':
            theme('light');
            break;
        default:
            break;
    }
}

const themeMode = computed(() => {
    return localStorage.theme === 'dark' ? 'Light Theme' : 'Dark Theme'
})
</script>

<template>
    <nav class="fixed bg-[hsl(0,0%,98%)] dark:bg-[hsl(207,26%,17%)] top-0 left-0 right-0 py-6 shadow-lg ">
        <div class="container flex items-center justify-between font-semibold">
            <h1 class="text-lg md:text-xl">Where in the world?</h1>
            <button class="text-xs md:text-base" @click="toggleTheme()">
                <i class="fa-solid fa-cloud-moon"></i> {{ themeMode }}
            </button>
        </div>
    </nav>
</template>