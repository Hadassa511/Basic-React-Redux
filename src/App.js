import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> List of Users </h1>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
