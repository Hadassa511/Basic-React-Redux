import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import UsersList from './components/UsersList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> List of Users </h1>
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
