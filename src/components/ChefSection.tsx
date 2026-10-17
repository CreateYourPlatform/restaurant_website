import "../styles/chef-section.css";

export default function ChefSection() {
  return (
    <section className="chef-section" id="chef">
      <div className="chef-image-container">
        <img
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
          alt="Chef preparing a dish"
        />

        <div className="chef-image-overlay">
          <span>THE KITCHEN</span>
          <h3>Where Every Detail Matters</h3>
        </div>
      </div>

      <div className="chef-content">
        <span className="chef-eyebrow">MEET THE CHEF</span>

        <h2>
          The Art Behind
          <br />
          Every Plate.
        </h2>

        <div className="chef-line" />

        <p>
          Our kitchen is guided by a simple philosophy — respect the
          ingredient, refine the technique, and let every plate tell its
          own story.
        </p>

        <p>
          From carefully selected produce to the final presentation, our
          approach combines timeless culinary traditions with a modern
          perspective.
        </p>

        <div className="chef-signature">
          <span className="chef-name">ALEXANDER REED</span>
          <span className="chef-title">EXECUTIVE CHEF</span>
        </div>

        <a href="#reservation" className="chef-button">
          EXPERIENCE THE MENU <span>↗</span>
        </a>
      </div>
    </section>
  );
}