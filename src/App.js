import React from 'react';
import BookComponent from './features/ContextConsumer/index';
import UserComponent from './features/user/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <UserComponent />
      <BookComponent />
    </div>
  );
}

export default App;
