<script setup>
import { useCountriesStore } from '@/stores/countries.js'
import { computed, onMounted, ref, watch } from "vue";
import CardComponent from "@/components/CardComponent.vue";
const country = ref("");
const region = ref("");

const countriesStore = useCountriesStore()
const filteredCountries = ref([...countriesStore.countries]);


watch(region, (newRegion, oldRegion) =>{
  if (newRegion.length < 1){
    return;
  } else {
    return filteredCountries.value = countriesStore.countries.filter((item) => {
      return item.region.toLowerCase() === newRegion.toLowerCase();
    })
  }
});

watch(country, (newCountry, oldCountry) =>{
  if (newCountry.length > 0) {
    return filteredCountries.value = countriesStore.countries.filter((item) => {
      return item.name.toLowerCase().includes(newCountry.toLowerCase())
    })
  }
  return filteredCountries.value = countriesStore.countries;
});
</script>

<template>
    <div class="container space-y-24">
      <div class="flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0">
        <input 
          type="text" 
          placeholder="Search for a country..." 
          v-model="country" 
          class="px-4 py-2 dark:bg-[hsl(207,26%,20%)] rounded-md shadow-md text-sm" 
        />
        <select v-model="region" class="px-4 py-2 dark:bg-[hsl(207,26%,20%)] rounded-md shadow-md text-sm" name="region" id="region">
          <option disabled selected value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16" v-if="filteredCountries.length > 0">
        <CardComponent v-for="(country, index) in filteredCountries" :key="index" :country="country" />
      </div>
    </div>
</template>
