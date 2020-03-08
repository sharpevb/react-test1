import React from "react";
import ReactDOM from "react-dom";
//import { render } from "react-dom";
//import { Provider } from "react-redux";
//import { createStore } from "redux";
//import rootReducer from "redux"; 
import "./index.css";
import App from "./App";


//const store = createStore(rootReducer)

// Create Store, Wrap the Provider Component to the App
// render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   )


ReactDOM.render(<App />, document.getElementById("root"));
