//Startup essentially redux side of app and render root
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
//import all reducers from reducers directory
import reducers from './reducers';

import App from './components/App';

//Create a new instance of store with createStore with three arguments: 
//1) a reducer that returns an array, combine reducers
//2) an empty object is/will be the starting or initial state of app for server side rendering  
//3) applyMiddleware with thunk
const store = createStore(reducers , {}, applyMiddleware())
//Connect the redux store (which is created at the very top level 
//of app) by passing it as a prop to react side of app by using react-redux's "Provider"
ReactDom.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"))