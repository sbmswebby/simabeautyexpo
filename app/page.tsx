'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function SimaExpoPage() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-card, .event-card');
    cards.forEach(card => {
      const element = card as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s, transform 0.6s';
      observer.observe(card);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-gold: #c49c33;
          --secondary-teal: #1aa7a7;
          --dark-bg: #0a0a0a;
          --light-text: #ffffff;
          --accent-pink: #ff6b9d;
          --accent-purple: #8b5cf6;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%);
          color: var(--light-text);
          overflow-x: hidden;
        }

        .bg-animation {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          overflow: hidden;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          animation: float 20s infinite ease-in-out;
        }

        .shape1 {
          width: 400px;
          height: 400px;
          background: var(--primary-gold);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .shape2 {
          width: 300px;
          height: 300px;
          background: var(--accent-pink);
          bottom: -50px;
          right: -50px;
          animation-delay: 5s;
        }

        .shape3 {
          width: 350px;
          height: 350px;
          background: var(--accent-purple);
          top: 50%;
          right: 10%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(50px, -50px) rotate(120deg); }
          66% { transform: translate(-30px, 30px) rotate(240deg); }
        }



        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 1;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: 6rem;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff, var(--primary-gold), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out;
          line-height: 1.1;
        }

        .hero-content .subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.8);
          animation: fadeInUp 1s ease-out 0.2s backwards;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          animation: fadeInUp 1s ease-out 0.4s backwards;
        }

        .btn {
          padding: 15px 40px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary-gold), var(--secondary-teal));
          color: var(--dark-bg);
          box-shadow: 0 10px 30px rgba(196, 156, 51, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(196, 156, 51, 0.6);
        }

        .btn-secondary {
          background: transparent;
          color: var(--light-text);
          border: 2px solid var(--primary-gold);
        }

        .btn-secondary:hover {
          background: var(--primary-gold);
          color: var(--dark-bg);
          transform: translateY(-5px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          position: relative;
          z-index: 1;
          padding: 100px 50px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 60px;
          background: linear-gradient(135deg, var(--primary-gold), var(--light-text));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .feature-card {
          position: relative;
          padding: 40px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-pink));
          opacity: 0;
          transition: opacity 0.4s;
          z-index: -1;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-gold);
        }

        .feature-card:hover::before {
          opacity: 0.1;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--primary-gold), var(--secondary-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .feature-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: var(--light-text);
        }

        .feature-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .events-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .event-card {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s;
        }

        .event-card:hover {
          transform: scale(1.05);
        }

        .event-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }

        .event-card:hover .event-image {
          transform: scale(1.1);
        }

        .event-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
        }

        .event-overlay h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .event-overlay p {
          color: rgba(255, 255, 255, 0.8);
        }

        .stats {
          background: linear-gradient(135deg, rgba(196, 156, 51, 0.1), rgba(26, 167, 167, 0.1));
          padding: 80px 50px;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-item h2 {
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--primary-gold), var(--secondary-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .stat-item p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        footer {
          position: relative;
          z-index: 1;
          background: rgba(10, 10, 10, 0.9);
          padding: 60px 50px 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--primary-gold), var(--secondary-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 10px;
        }

        .footer-section a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-section a:hover {
          color: var(--primary-gold);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--light-text);
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 968px) {
          .hero-content h1 {
            font-size: 3.5rem;
          }

          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          nav {
            padding: 20px 30px;
          }

          section {
            padding: 60px 30px;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Animated Background */}
      <div className="bg-animation">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
      </div>



      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>SIMA EXPO 2025</h1>
          <p className="subtitle">Where Beauty Meets Lifestyle Excellence</p>
          <div className="cta-buttons">
            <a href="#events" className="btn btn-primary">Explore Events</a>
            <a href="#pageant" className="btn btn-secondary">Join Pageant</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">Elevate Your Experience</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Beauty Expo</h3>
            <p>Discover the latest in skincare, cosmetics, and beauty innovations from leading brands and experts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👗</div>
            <h3>Lifestyle Showcase</h3>
            <p>Explore cutting-edge fashion, wellness products, and lifestyle trends that redefine elegance.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Food Festival</h3>
            <p>Indulge in Telangana&apos;s rich culinary heritage with traditional and modern gastronomic delights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <h3>Fashion Shows</h3>
            <p>Witness glamorous runway presentations from renowned designers showcasing their latest collections.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Competitions</h3>
            <p>Participate in makeup, hair styling, fashion design, and dance competitions with exciting prizes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👑</div>
            <h3>Beauty Pageant</h3>
            <p>Watch contestants showcase grace, talent, and elegance in our prestigious STAR SIMA pageant.</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events">
        <h2 className="section-title">Featured Attractions</h2>
        <div className="events-container">
          <div className="event-card">
            <Image 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop" 
              alt="Beauty Demos" 
              className="event-image"
              width={800}
              height={600}
              unoptimized
            />
            <div className="event-overlay">
              <h3>Live Beauty Demos</h3>
              <p>Learn from industry professionals</p>
            </div>
          </div>
          <div className="event-card">
            <Image 
              src="https://images.unsplash.com/photo-1558769132-cb1aea1f5614?w=800&h=600&fit=crop" 
              alt="Fashion Show" 
              className="event-image"
              width={800}
              height={600}
              unoptimized
            />
            <div className="event-overlay">
              <h3>Fashion Runway</h3>
              <p>Haute couture and contemporary designs</p>
            </div>
          </div>
          <div className="event-card">
            <Image 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop" 
              alt="Food Festival" 
              className="event-image"
              width={800}
              height={600}
              unoptimized
            />
            <div className="event-overlay">
              <h3>Telangana Food Fest</h3>
              <p>A celebration of regional flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h2 className="section-title">Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h2>500+</h2>
            <p>Exhibitors</p>
          </div>
          <div className="stat-item">
            <h2>50K+</h2>
            <p>Visitors</p>
          </div>
          <div className="stat-item">
            <h2>15+</h2>
            <p>Events</p>
          </div>
          <div className="stat-item">
            <h2>100+</h2>
            <p>Competitions</p>
          </div>
        </div>
      </section>

      {/* Beauty Pageant Section */}
      <section id="pageant">
        <h2 className="section-title">STAR SIMA Beauty Pageant</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👸</div>
            <h3>Miss STAR SIMA</h3>
            <p>Celebrate grace, intelligence, and beauty in our premier pageant for women.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤵</div>
            <h3>Mr. STAR SIMA</h3>
            <p>Showcase confidence, talent, and charisma in our distinguished men&apos;s category.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💃</div>
            <h3>Mrs. STAR SIMA</h3>
            <p>Honoring the elegance and achievements of married women with poise.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎪</div>
            <h3>Kid STAR SIMA</h3>
            <p>Nurturing young talent and confidence in our special children&apos;s pageant.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SIMA EXPO</h3>
            <p>South India&apos;s premier beauty and lifestyle exposition celebrating innovation, tradition, and excellence.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#pageant">Beauty Pageant</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Exhibitors</h3>
            <ul>
              <li><a href="#">Book a Stall</a></li>
              <li><a href="#">Sponsorship</a></li>
              <li><a href="#">Exhibitor Profile</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Email: infomultaigroup@gmail.com</li>
              <li>Phone: +91 7995514547</li>
              <li>Location: Hyderabad, Telangana</li>
            </ul>
          </div>
        </div>
                {/* WhatsApp */}
        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-500" size={20} />
            <h4 className="font-semibold text-gray-900">WhatsApp</h4>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/917995514547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SIMA EXPO. All rights reserved. | Empowering Beauty & Lifestyle Excellence</p>
        </div>
      </footer>
    </>
  );
}