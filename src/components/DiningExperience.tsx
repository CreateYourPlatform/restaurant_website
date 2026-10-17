
import { useEffect, useRef, useState } from "react";
import "../styles/dining-experience.css";

export default function DiningExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`dining-section ${visible ? "dining-visible" : ""}`}
      id="experience"
      ref={sectionRef}
    >
      <div className="dining-image">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
          alt="Elegant fine dining restaurant interior"
          loading="lazy"
        />
        <div className="dining-image-caption">
          <span>THE ART OF HOSPITALITY</span>
        </div>
      </div>

      <div className="dining-content">
        <span className="dining-eyebrow">BEYOND THE PLATE</span>
        <h2>An Evening Worth Savouring.</h2>
        <div className="dining-gold-line" />

        <p>
          Great dining is more than a meal. It is the atmosphere, the thoughtful
          details, and the pleasure of sharing something extraordinary.
        </p>

        <p>
          Discover carefully considered menus, attentive hospitality, and an
          inviting setting designed to make every visit memorable.
        </p>

        <div className="dining-features">
          <div>
            <span className="dining-number">01</span>
            <span>Thoughtful Menus</span>
          </div>
          <div>
            <span className="dining-number">02</span>
            <span>Warm Ambience</span>
          </div>
          <div>
            <span className="dining-number">03</span>
            <span>Personal Service</span>
          </div>
        </div>

        <a className="dining-story-link" href="#about">
          DISCOVER OUR STORY <span>↗</span>
        </a>
      </div>
    </section>
  );
}
