import { legacy_createStore as createStore } from "redux";
import { myReducer } from "../REdux2/Reducer";

export  const myStore=createStore(myReducer)