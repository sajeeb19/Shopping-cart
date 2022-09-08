import { combineReducers } from "redux";

import asusReducer from "./Asus/asusReducer";
import canonReducer from "./Canon/canonReducer";
import dellReducer from "./Dell/dellReducer";

const rootReducer = combineReducers({
    asusItem : asusReducer,
    dellItem : dellReducer,
    canonItem : canonReducer
});

export default rootReducer;