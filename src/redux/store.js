import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {}, //state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //to see redux dev tools when we inspect elements
);

export default store;