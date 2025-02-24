import { api } from "@/modules/utils/utils";
import axios from "axios";
import { ref } from "vue";

const getSuccessStory = () => {
    let success_stories = ref([]);
    const error = ref();

    const load = async() => {
        try {
            let response = await axios.get(api + "success-stories");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            success_stories.value = response.data.success_stories;
        } catch (error) {
            error.value = error;
            console.log(error);
        }
    }

    return {success_stories, error, load}
}

export default getSuccessStory