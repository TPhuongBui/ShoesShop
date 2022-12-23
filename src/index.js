import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// setup Store:
import { Provider } from 'react-redux';
import { store } from './redux/configStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  // <div>Hello React</div>
  <Provider store={store}>
    <App />
  </Provider>


);

