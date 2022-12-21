import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

import restaurantsReducer from "./features/restaurant/restaurantsSlice";

const store = createStore(
  restaurantsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById("root")
);
