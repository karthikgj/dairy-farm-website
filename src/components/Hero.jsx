import { ArrowDown, ArrowUpRight } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">

      <div className="hero-image" />

      <div className="hero-overlay" />

      <div className="hero-content container">

        <div className="hero-copy">

          <p className="eyebrow hero-eyebrow">
            From our farm
          </p>

          <h1 className="hero-title">
            Pure from our cows.
            <br />
            <em>Fresh for your family.</em>
          </h1>

          <p className="hero-description">
            Thoughtfully managed dairy farming focused on
            animal care, farm hygiene and the freshness
            of every drop.
          </p>

          <div className="hero-actions">

            <a href="#farm" className="btn btn-light">
              Explore our farm
              <ArrowUpRight size={16} />
            </a>

            <a href="#contact" className="btn btn-outline-light">
              Contact us
            </a>

          </div>

        </div>

      </div>

      <a href="#farm" className="hero-scroll">
        <span>Scroll to discover</span>
        <ArrowDown size={15} />
      </a>

      <div className="hero-location">
        <span className="hero-location-line" />
        <span>EST. 2026 · INDIA</span>
      </div>

    </section>
  );
}

export default Hero;