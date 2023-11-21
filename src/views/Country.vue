<template>
  <main class="container">
    <button 
        class="bg-[hsl(0,0%,100%)] dark:bg-[hsl(209,23%,22%)] shadow-md px-4 py-2 text-xs rounded font-medium"
        @click="$router.push({name: 'Home'})"
    >
        <i class="fa-solid fa-arrow-left-long"></i> Back
    </button>
    <div class="flex flex-col md:flex-row justify-between items-center mt-12 md:space-x-24">
        <div class="w-full ">
            <img class="w-full h-auto" :src="country.flag" :alt="country.name">
        </div>
        <div class="w-full py-12">
            <h1 class="font-extrabold text-lg md:text-2xl mb-8">{{ country.name }}</h1>
            <div class="grid md:grid-flow-col grid-flow-row gap-8 text-sm leading-relaxed">
                <div>
                    <p>
                        <strong>Native name:</strong> {{ country.nativeName }}
                    </p>
                    <p>
                        <strong>Population:</strong> {{ country.population }}
                    </p>
                    <p>
                        <strong>Region:</strong> {{ country.region }}
                    </p>
                    <p>
                        <strong>Sub Region:</strong> {{ country.subregion }}
                    </p>
                    <p>
                        <strong>Capital:</strong> {{ country.capital }}
                    </p>
                </div>
                <div>
                    <p>
                        <strong>Top Level Domain:</strong> {{ country.topLevelDomain.toString() }}
                    </p>
                    <p>
                        <strong>Currencies:</strong> {{ country.topLevelDomain.toString() }}
                    </p>
                    <p>
                        <strong>Languages:</strong> {{ country.languages.map(item => item.name).toString() }}
                    </p>
                </div>
            </div>
            <div v-if="country.borders" class="mt-16 flex flex-col md:flex-row items-start md:space-x-4">
                <p class="text-sm font-bold">Border Countries:</p>
                <div class="flex items-stretch mt-4 md:mt-0 flex-wrap gap-4">
                    <button @click="selectCountry(country.alpha3Code)" class="bg-[hsl(0,0%,100%)] dark:bg-[hsl(209,23%,22%)] shadow-md px-6 py-1 text-xs rounded font-medium whitespace-nowrap" v-for="(country, index) in findBorderCountries" :key="index"> {{ country.name }} </button>
                </div>
            </div>
        </div>

    </div>
  </main>
</template>

<script setup>
import { useCountriesStore } from '@/stores/countries.js';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const store = useCountriesStore();
const country = computed(() => {
    return store.countries.find((item) => {
        return item.alpha3Code === route.params.id
    }) 
});

const findBorderCountries = computed(() => {
    const countries = store.countries.filter((item) => {
        return country.value.borders.includes(item.alpha3Code)
    })
    return countries.map((item) => {
        return {name: item.name, alpha3Code: item.alpha3Code}
    })
})
const selectCountry = async (id) => {
    store.selectCountry(id);
    return router.push({ name: 'Country', params: {id} })
}
</script>

<style>

</style>