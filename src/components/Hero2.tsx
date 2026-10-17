
import '../styles/hero2style.css';

export default function Hero2() {
  return (
    <section className="hero-editorial" id="home">
      <div className="editorial-copy">
        <span className="editorial-kicker">
          GOOD FOOD, GOOD COMPANY
        </span>

        <h1>
          Gather around
          <br />
          something <em>beautiful.</em>
        </h1>

        <p>
          Seasonal ingredients, thoughtful cooking and
          a place that always feels like coming home.
        </p>

        <a href="#menu" className="editorial-cta">
          Discover the menu <span>↗</span>
        </a>

        <div className="editorial-note">
          MADE WITH CARE · SERVED WITH LOVE
        </div>
      </div>

      <div className="editorial-image">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"
          alt="Beautifully presented restaurant dining experience"
        />
        <div className="editorial-image-label">
          <span>THE ART OF DINING</span>
          <span>EST. 2018</span>
        </div>
      </div>
    </section>
  );
}
