import React, { useState } from 'react';

const FinalSection = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const blowCandles = () => {
    setCandlesBlown(true);
    
    // Create confetti
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.innerHTML = ['🎉', '🎊', '✨', '💖', '🌸', '23'][Math.floor(Math.random() * 6)];
      confetti.style.position = 'fixed';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-50px';
      confetti.style.fontSize = '2rem';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '1000';
      document.body.appendChild(confetti);
      
      confetti.animate([
        { transform: 'translateY(-50px) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
      ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'ease-in'
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
