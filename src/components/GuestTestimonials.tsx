
import { useEffect, useState } from "react";
import "../styles/guest-testimonials.css";

const reviews = [
  {
    quote:
      "A wonderful evening from beginning to end. The ambience was beautiful, and every detail felt thoughtfully considered.",
    name: "Guest Review",
    occasion: "DINING EXPERIENCE",
  },
  {
    quote:
      "Beautiful presentation, inviting atmosphere, and attentive service. A lovely setting for a special occasion.",
    name: "Guest Review",
    occasion: "SPECIAL OCCASION",
  },
  {
    quote:
      "An elegant place to slow down, enjoy good food, and spend quality time together.",
    name: "Guest Review",
    occasion: "EVENING DINING",
  },
];

export default function GuestTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => {
    setActive(
      (current) => (current + direction + reviews.length) % reviews.length
    );
  };

  const review = reviews[active];

  return (
    <section className="guest-section" id="reviews">
      <div className="guest-inner">
        <span className="guest-eyebrow">A NOTE FROM OUR GUESTS</span>
        <h2>Moments Worth Remembering</h2>

        <div
          className="guest-review"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
        >
          <span className="guest-quote-mark" aria-hidden="true">
            “
          </span>

          <div key={active} className="guest-review-content">
            <div className="guest-stars" aria-label="Decorative stars">
              ★★★★★
            </div>

            <blockquote>{review.quote}</blockquote>

            <span className="guest-review-name">{review.name}</span>
            <span className="guest-review-occasion">{review.occasion}</span>
          </div>
        </div>

        <div className="guest-controls">
          <button onClick={() => move(-1)} aria-label="Previous review">
            &#8592;
          </button>

          <div className="guest-dots">
            {reviews.map((item, index) => (
              <button
                key={`${item.occasion}-${index}`}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show review ${index + 1}`}
                aria-pressed={index === active}
              />
            ))}
          </div>

          <button onClick={() => move(1)} aria-label="Next review">
            &#8594;
          </button>
        </div>

        <p className="guest-note">
          Your restaurant genuine customer's feedback will be provided here.
        </p>
      </div>
    </section>
  );
}
