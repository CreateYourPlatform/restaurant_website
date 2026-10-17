import "../styles/floating-cta.css";

export default function FloatingCTA() {
  return (
    <a
      href="https://forms.gle/HYXFWo29XNroABbK9"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-cta"
    >
      <span className="cta-dot"></span>
      Want a Website Like This?
      <span className="cta-arrow">↗</span>
    </a>
  );
}