
export const state = () => ({
    mode: false,
    modal: false
});

export const actions = {

};

export const mutations = {
    light(state) {
        state.mode = false;
    },
    dark(state) {
        state.mode = true;
    },
    invert(state) {
        state.mode = !state.mode;
    },
    modelo(state) {
        state.modal = !state.modal;
        console.log(state.modal)
    }

};

export const getters = {
    getMode(state) {
        return state.mode;
    },
    getModal(state) {
        return state.modal;
    }

};

