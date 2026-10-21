
import React, { useEffect, useState } from "react";
import "../styles/Gallery.css";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=80",
    title: "A Taste Worth Remembering",
    description:
      "Beautiful dishes, carefully prepared for every occasion.",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    title: "Elegant Dining",
    description:
      "Relax and enjoy an unforgettable dining experience.",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
    title: "Fresh From Our Kitchen",
    description:
      "Quality ingredients brought together by our chefs.",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80",
    title: "Perfect Atmosphere",
    description:
      "A welcoming space for family, friends and celebrations.",
  },
];

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = (): void => {
    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">

        <div className="gallery-heading">
          <span>OUR GALLERY</span>
          <h2>A Glimpse Into Our World</h2>
          <p>
            Discover our food, atmosphere and the moments that make
            every visit special.
          </p>
        </div>

        <div className="gallery-slider">

          <img
            src={images[current].src}
            alt={images[current].title}
            className="gallery-image"
          />

          <button
            className="gallery-arrow gallery-prev"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            &#10094;
          </button>

          <button
            className="gallery-arrow gallery-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#10095;
          </button>

          <div className="gallery-overlay">
            <h3>{images[current].title}</h3>
            <p>{images[current].description}</p>
          </div>

        </div>

        <div className="gallery-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`gallery-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
