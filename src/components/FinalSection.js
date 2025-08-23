import React, { useState } from 'react';

const FinalSection = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const blowCandles = () => {
    // Create wind effect first
    createWindEffect();

    // Blow out candles gradually in groups
    const candleGroups = [
      [0, 1, 2, 3, 4],      // First 5 candles
      [5, 6, 7, 8, 9, 10],  // Next 6 candles
      [11, 12, 13, 14, 15], // Next 5 candles
      [16, 17, 18, 19],     // Next 4 candles
      [20, 21, 22]          // Last 3 candles
    ];

    let currentCandles = '🕯️'.repeat(23);

    candleGroups.forEach((group, groupIndex) => {
      setTimeout(() => {
        // Blow out this group
        let newCandles = currentCandles.split('');
        group.forEach(candleIndex => {
          if (newCandles[candleIndex] === '🕯️') {
            newCandles[candleIndex] = '🕯';
          }
        });
        currentCandles = newCandles.join('');

        // Update candles with smooth transition
        const candlesElement = document.querySelector('.candles');
        if (candlesElement) {
          // Add shake effect
          candlesElement.style.transform = 'scale(1.05)';
          setTimeout(() => {
            candlesElement.innerHTML = currentCandles;
            candlesElement.style.transform = 'scale(1)';
          }, 100);
        }

        // Create smoke for this group
        createSmokeEffect(group.length);

        // If all candles are blown, show final celebration
        if (groupIndex === candleGroups.length - 1) {
          setTimeout(() => {
            setCandlesBlown(true);
            createMassiveConfetti();
          }, 500);
        }
      }, groupIndex * 600); // 600ms delay between groups
    });
  };

  const createWindEffect = () => {
    // Create wind particles
    for (let i = 0; i < 15; i++) {
      const wind = document.createElement('div');
      wind.innerHTML = ['💨', '🌬️', '☁️'][Math.floor(Math.random() * 3)];
      wind.style.position = 'fixed';
      wind.style.left = (10 + Math.random() * 20) + '%';
      wind.style.top = (40 + Math.random() * 20) + '%';
      wind.style.fontSize = (16 + Math.random() * 8) + 'px';
      wind.style.opacity = '0.7';
      wind.style.pointerEvents = 'none';
      wind.style.zIndex = '1000';
      document.body.appendChild(wind);

      wind.animate([
        { transform: 'translateX(0) rotate(0deg)', opacity: 0.7 },
        { transform: `translateX(${window.innerWidth * 0.6}px) rotate(360deg)`, opacity: 0 }
      ], {
        duration: 1500 + Math.random() * 1000,
        easing: 'ease-out'
      }).onfinish = () => {
        if (wind.parentNode) {
          wind.parentNode.removeChild(wind);
        }
      };
    }
  };

  const createSmokeEffect = (candleCount) => {
    // Create smoke for blown candles
    for (let i = 0; i < candleCount * 2; i++) {
      const smoke = document.createElement('div');
      smoke.innerHTML = ['💨', '☁️', '🌫️'][Math.floor(Math.random() * 3)];
      smoke.style.position = 'fixed';
      smoke.style.left = (35 + Math.random() * 30) + '%';
      smoke.style.top = (35 + Math.random() * 10) + '%';
      smoke.style.fontSize = (12 + Math.random() * 6) + 'px';
      smoke.style.opacity = '0.6';
      smoke.style.pointerEvents = 'none';
      smoke.style.zIndex = '999';
      document.body.appendChild(smoke);

      smoke.animate([
        { transform: 'translateY(0) scale(1)', opacity: 0.6 },
        { transform: `translateY(-${50 + Math.random() * 30}px) scale(0.5)`, opacity: 0 }
      ], {
        duration: 2000 + Math.random() * 1000,
        easing: 'ease-out'
      }).onfinish = () => {
        if (smoke.parentNode) {
          smoke.parentNode.removeChild(smoke);
        }
      };
    }
  };

  const createMassiveConfetti = () => {
    // Create massive confetti explosion
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement('div');
      confetti.innerHTML = ['🎉', '🎊', '✨', '💖', '🌸', '23', '🎂'][Math.floor(Math.random() * 7)];
      confetti.style.position = 'fixed';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-50px';
      confetti.style.fontSize = (18 + Math.random() * 12) + 'px';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '1000';
      document.body.appendChild(confetti);

      confetti.animate([
        { transform: 'translateY(-50px) rotate(0deg) scale(1)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 100}px) rotate(${720 + Math.random() * 720}deg) scale(0.5)`, opacity: 0 }
      ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }).onfinish = () => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      };
    }
  };

  const createSakuraRain = () => {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const sakura = document.createElement('div');
        sakura.innerHTML = ['🌸', '🌺', '🌼'][Math.floor(Math.random() * 3)];
        sakura.style.position = 'fixed';
        sakura.style.left = Math.random() * 100 + '%';
        sakura.style.top = '-50px';
        sakura.style.fontSize = '2rem';
        sakura.style.pointerEvents = 'none';
        sakura.style.zIndex = '1000';
        sakura.style.animation = `fall ${4 + Math.random() * 4}s linear forwards`;
        document.body.appendChild(sakura);
        
        setTimeout(() => {
          if (sakura.parentNode) {
            sakura.parentNode.removeChild(sakura);
          }
        }, 8000);
      }, i * 100);
    }
  };

  const openSpotify = () => {
    const spotifyUrl = 'https://open.spotify.com/track/2aPTvyE09vUCRwVvj0I8WK?si=ac1b7e57269a4816';
    window.open(spotifyUrl, '_blank');
  };

  const finalStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.9), rgba(155, 89, 182, 0.8)), url('/assets/FINAL-FOTOGRAF.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section className="section final" style={finalStyle}>
      <div className="final-content">
        <h2>İyi Ki Doğdun!</h2>
        
        <p>Canım sevgilim, bu özel günde uzakta olsam da kalbim seninle...</p>
        <p>2 ay önce tanıştığımızdan beri hayatım çok daha güzel. Sen benim için çok özelsin! 🌸</p>
        
        <div className="birthday-cake">
          <div className="cake">🎂</div>
          <div className={`candles ${candlesBlown ? 'blown' : ''}`}>
            {candlesBlown 
              ? '🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯🕯'
              : '🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️'
            }
          </div>
          <p>23 Yaşın Kutlu Olsun! 🎂</p>
        </div>
        
        <div className="buttons">
          <button className="btn" onClick={blowCandles}>
            🌬️ Mumları Söndür
          </button>
          <button className="btn" onClick={openSpotify}>
            🎵 Bizim Şarkımız
          </button>
          <button className="btn" onClick={createSakuraRain}>
            🌸 Sakura Yağmuru
          </button>
        </div>
        
        <div className="signature">
          <p>İyi ki doğdun güzelim!</p>
          <p>Seni çok seven, Arshia 💖</p>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
