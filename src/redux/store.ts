import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartItems from "./reducers/cartItem";

const reducers = combineReducers({
  cartItems: cartItems,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
