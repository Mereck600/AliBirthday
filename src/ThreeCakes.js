import { useEffect, useState } from "react";

export default function ThreeCakes({ imgs = [], backs = [] }) {
  // track which cards are flipped
  const [flipped, setFlipped] = useState(() => imgs.map(() => false));

  // reset flip state if imgs change length/order
  useEffect(() => {
    setFlipped(imgs.map(() => false));
  }, [imgs]);

  const toggle = (i, e) => {
    e.stopPropagation(); // don't bubble to overlay
    setFlipped(prev => prev.map((f, idx) => (idx === i ? !f : f)));
  };

  const keyToggle = (i, e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i, e);
    }
  };

  return (
    <div className="three-cakes">
      {imgs.map((src, i) => (
        <div
          key={i}
          className="flip-card"
          role="button"
          tabIndex={0}
          onClick={(e) => toggle(i, e)}
          onKeyDown={(e) => keyToggle(i, e)}
        >
          <div className={`flip-inner ${flipped[i] ? "flipped" : ""}`}>
            <div className="flip-face flip-front">
              <img
                src={src}
                alt={`photo ${i + 1}`}
                draggable={false}
              />
            </div>
            <div className="flip-face flip-back">
              <div className="flip-text">
                {backs[i] ?? "🎉 Happy Birthday!"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
