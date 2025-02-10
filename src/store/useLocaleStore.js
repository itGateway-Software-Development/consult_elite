import { defineStore } from "pinia";
import { ref } from "vue";

export const useLocaleStore = defineStore("localeStore", () => {
    const locale = ref('EN');

    function updateLocale(newLocale) {
        locale.value = newLocale;
    }

    return {locale, updateLocale}
})