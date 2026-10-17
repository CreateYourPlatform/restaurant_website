
import '../styles/herostyle3.css';

export default function Hero3() {
  return (
    <section className="hero-luxury" id="home">
      <div className="luxury-content">
        <span className="luxury-eyebrow">
          AN EXTRAORDINARY DINING EXPERIENCE
        </span>

        <h1>
          A Taste Beyond
          <br />
          The Ordinary.
        </h1>

        <p>
          Exceptional ingredients. Artful creations.
          Unforgettable moments around the table.
        </p>

        <div className="luxury-actions">
          <a href="#menu" className="luxury-btn">
            EXPLORE OUR MENU
          </a>
          <a href="#reservation" className="luxury-text-link">
            RESERVE A TABLE ↗
          </a>
        </div>
      </div>

      <span className="luxury-index"> </span>
    </section>
  );
}
