import { createStore } from "vuex";
import { auth } from "../store/authmodule";

const store = createStore({
    modules: {
        auth
    }
});
export default store;