<template>
<div @click="selectCountry(country.alpha3Code)" class="rounded shadow-md overflow-clip cursor-pointer hover:shadow-2xl transition ease-linear min-h-fit">
    <img loading="lazy" class="h-2/4 w-full object-cover" :src="country.flag" :alt="country.name">
    <div class="p-4">
        <p class="font-semibold text-xl">
            {{ country.name }}
        </p>
        <div class="text-xs mt-4 leading-relaxed">
            <p><strong>Population:</strong> {{country.population}}</p>
            <p><strong>Region:</strong> {{country.region}}</p>
            <p><strong>Capital:</strong> {{country.capital}}</p>
        </div>
    </div>
</div>
</template>

<script setup>
import { useCountriesStore } from '@/stores/countries.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useCountriesStore();

const selectCountry = async (id) => {
    await store.selectCountry(id);
    return router.push({ name: 'Country', params: {id} })
}
defineProps(['country'])
</script>

<style>

</style>