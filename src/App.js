import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import JapanSection from './components/JapanSection';
import FinalSection from './components/FinalSection';
import SakuraRain from './components/SakuraRain';

function App() {
  return (
    <div className="App">
      <SakuraRain />
      <HeroSection />
      <StorySection />
      <JapanSection />
      <FinalSection />
    </div>
  );
}

export default App;
