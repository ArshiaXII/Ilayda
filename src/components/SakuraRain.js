import React, { useEffect } from 'react';

const SakuraRain = () => {
  useEffect(() => {
    const createSakura = () => {
      const sakura = document.createElement('div');
      sakura.className = 'sakura';
      sakura.innerHTML = ['🌸', '🌺', '🌼'][Math.floor(Math.random() * 3)];
      sakura.style.left = Math.random() * 100 + '%';
      sakura.style.animationDuration = (4 + Math.random() * 4) + 's';
      sakura.style.animationDelay = Math.random() * 2 + 's';
      
      const rainContainer = document.querySelector('.sakura-rain');
      if (rainContainer) {
        rainContainer.appendChild(sakura);
        
        setTimeout(() => {
          if (sakura.parentNode) {
            sakura.parentNode.removeChild(sakura);
          }
        }, 8000);
      }
    };

    // Create initial sakura
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createSakura(), i * 500);
    }

    // Continue creating sakura
    const interval = setInterval(createSakura, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="sakura-rain"></div>;
};

export default SakuraRain;
