import React from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <App/>
 ,
  document.getElementById('root')
);


// import { createStore } from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './reducers/rootReducer';

// const store=createStore(rootReducer);
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));