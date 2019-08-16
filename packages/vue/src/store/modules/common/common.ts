import { CommonState, RenderProps } from './common.interface';

const state: CommonState = {
    selectItem: {},
    renderList: [],
};

const mutations = {
    setSelectItem(states: CommonState, params: RenderProps) {
        states.selectItem = params;
    },
    setRenderList(states: CommonState, params: RenderProps[]) {
        states.renderList = params;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
};
