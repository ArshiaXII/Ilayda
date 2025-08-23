import React from 'react';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(255, 107, 157, 0.8), rgba(155, 89, 182, 0.8)), url('/assets/ANA-FOTOGRAF.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section className="section hero" style={heroStyle}>
      <div className="hero-content">
        <h1>Doğum Günün Kutlu Olsun</h1>
        <p>İlayda 🌸</p>
        <p>Uzaklarda olsan da kalbimdesin... Bu özel günde sana olan sevgimi göstermek istedim 💕</p>
      </div>
    </section>
  );
};

export default HeroSection;
