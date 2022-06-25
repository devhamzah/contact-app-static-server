import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import App from "./app";


import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore,applyMiddleware,compose } from "redux";
import allReducers from "./redux/reducers/insex"; 

const store = createStore(allReducers,applyMiddleware(compose(thunk)));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
