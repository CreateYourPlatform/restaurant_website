
import "../styles/reservation-footer.css";

export default function ReservationFooter() {
  return (
    <>
      <section className="reservation-section" id="reservation">
        <div className="reservation-overlay" />

        <div className="reservation-content">
          <span className="reservation-eyebrow">YOUR TABLE AWAITS</span>
          <h2>Make It an Evening to Remember.</h2>
          <p>
            Gather around the table for thoughtful food, warm hospitality,
            and memorable moments.
          </p>

          <div className="reservation-actions">
            <a className="reservation-primary" href="tel:+910000000000">
              CALL TO RESERVE
            </a>
            <a className="reservation-secondary" href="#contact">
              FIND US
            </a>
          </div>
        </div>
      </section>

      <footer className="luxury-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#home">
              Your Restaurant <span>DINING</span>
            </a>
            <p>
              A considered approach to food, atmosphere, and the art of
              hospitality.
            </p>
          </div>

          <div className="footer-column">
            <h3>EXPLORE</h3>
            <a href="#home">Home</a>
            <a href="#about">Our Story</a>
            <a href="#menu">Signature Dishes</a>
            <a href="#experience">The Experience</a>
            <a href="#reviews">Guest Stories</a>
          </div>

          <div className="footer-column">
            <h3>VISIT US</h3>
            <p>Replace with your restaurant address</p>
            <p>Replace with city and PIN code</p>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </div>

          <div className="footer-column">
            <h3>OPENING HOURS</h3>
            <p>Monday – Friday</p>
            <p>12:00 PM – 10:00 PM</p>
            <p>Saturday – Sunday</p>
            <p>12:00 PM – 11:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()}  Your Restaurant Dining. All rights reserved.
          </span>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook ↗
            </a>
          </div>

          <a className="footer-top" href="#home">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </>
  );
}
