import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './nav_components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./redux/reducers/rootReducer"


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
