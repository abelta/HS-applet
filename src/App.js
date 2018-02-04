import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Modal from 'react-modal';
import reducer from './reducers';
import { ProductsList } from './containers';
import './App.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

Modal.setAppElement('#root');

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header>
        <h1>HS Applet</h1>
      </header>
      <ProductsList />
    </div>
  </Provider>
);

export default App;
