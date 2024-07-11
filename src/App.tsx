import React from 'react';
import PoetryShowcase from './PoetryShowcase';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Gaurav Joshi!</h1>
        <p>Scroll down to see my work!</p>
      </header>
      <main>
        <PoetryShowcase />
      </main>
    </div>
  );
};

export default App;
