import React from 'react';
import DrawingSection from './containers/DrawingSection/DrawingSection';
import Banner from './components/Banner/Banner';
import H1 from './components/H1/H1';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner>
        <H1>Spirograph</H1>
      </Banner>
      <DrawingSection />
    </div>
  );
}

export default App;
