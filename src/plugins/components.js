import {App} from 'vue';

import Button from "@/components/common/Button.vue"
import ButtonOutline from '@/components/common/ButtonOutline.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';

export const initGlobalComponents = (app) => {
    app.component("Button", Button);
    app.component("ButtonOutline", ButtonOutline);
    app.component("SectionHeader", SectionHeader);
}