import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import allCountries from "@/static/data.json";

export const useCountriesStore = defineStore('countries', () => {
    const countries = allCountries.map(country => {
        const population = Intl.NumberFormat("en-US").format(country.population);
        return { ...country, population };
    });
    const country_id = ref("BEL"); 
    const country = computed(() => {
        return countries.find(( item ) => {
            return item.alpha3Code == country_id.value;
        })
    })
    const selectCountry = (id) => {
        return country_id.value = id;
    }
    return { countries, country_id, country, selectCountry }
})