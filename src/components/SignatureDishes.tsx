
import { useState } from "react";
import "../styles/signature-dishes.css";

const dishes = [
  {
    name: "The Signature Steak",
    category: "CHEF'S SPECIAL",
    description: "Perfectly seared steak with seasonal vegetables and a rich house sauce.",
    price: "$15.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0452FZN2m1_XDxbMPKJEGpPX-CfVCGrFJuXP7v5ofQ&s=10",
  },
  {
    name: "Garden Harvest",
    category: "FRESH & SEASONAL",
    description: "A vibrant seasonal creation featuring fresh produce and delicate flavours.",
    price: "$7.80",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Grand Dessert",
    category: "SOMETHING SWEET",
    description: "A beautifully presented dessert to complete your dining experience.",
    price: "$5.40",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Artisan Pasta",
    category: "HOUSE FAVOURITE",
    description: "Hand-finished pasta with a rich sauce, herbs, and parmesan.",
    price: "$9.40",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
  },
];

export default function SignatureDishes() {
  const [active, setActive] = useState(0);

  const move = (direction: number) => {
    setActive((current) =>
      (current + direction + dishes.length) % dishes.length
    );
  };

  return (
    <section className="signature-section" id="menu">
      <div className="signature-heading">
        <span className="signature-eyebrow">A TASTE OF EXCELLENCE</span>
        <h2>Our Signature Dishes</h2>
        <p>Thoughtfully crafted. Beautifully presented. Made to be remembered.</p>
      </div>

      <div className="signature-slider">
        <button
          className="signature-arrow"
          onClick={() => move(-1)}
          aria-label="Previous dishes"
        >
          &#8592;
        </button>

        <div className="signature-track">
          {[0, 1, 2].map((offset) => {
            const dish = dishes[(active + offset) % dishes.length];

            return (
              <article className="dish-card" key={dish.name}>
                <div className="dish-image-wrap">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                  <span className="dish-category">{dish.category}</span>
                </div>

                <div className="dish-info">
                  <div className="dish-title-row">
                    <h3>{dish.name}</h3>
                    <span className="dish-price">{dish.price}</span>
                  </div>
                  <p>{dish.description}</p>
                  <a href="#reservation" className="dish-link">
                    EXPERIENCE THIS DISH ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <button
          className="signature-arrow"
          onClick={() => move(1)}
          aria-label="Next dishes"
        >
          &#8594;
        </button>
      </div>

      <div className="signature-footer">
        <div className="signature-dots">
          {dishes.map((dish, index) => (
            <button
              key={dish.name}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show dish ${index + 1}`}
            />
          ))}
        </div>

        <a className="signature-menu-btn" href="#reservation">
          RESERVE YOUR TABLE
        </a>
      </div>
    </section>
  );
}
  