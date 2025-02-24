import { api } from "@/modules/utils/utils";
import axios from "axios";
import { ref } from "vue";

const getSocialProof = () => {
    let data = ref([]);
    const errors = ref();

    const load = async() => {
        try {
            let response = await axios.get(api + "success-rates");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            data.value = response.data.success_rates;
        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {data, errors, load}
}

export default getSocialProof