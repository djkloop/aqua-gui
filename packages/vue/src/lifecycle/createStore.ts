import {Vue} from 'vue/types/vue';

export const createStore = (vm: Vue, store: any) => {
        vm.$store = store;
    };

