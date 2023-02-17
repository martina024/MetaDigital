import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { productDetailReducer, productReducer  } from "./Reducers/ProductReducer";
import { userLoginReducer } from "./Reducers/userAdminReducers";




const rootReducer = combineReducers({productList:productReducer,
    productDetail:productDetailReducer,
    userlogin:userLoginReducer
});
const userInfoFormLocalStorage=localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null

const initialState={
    userLogin:{userInfo:userInfoFormLocalStorage}
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(thunk)));

export {store};