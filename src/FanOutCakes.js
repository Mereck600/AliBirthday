// FanOutCakes.jsx
import { useEffect, useState } from "react";
import PixelAnimator from "./PixelAnimator";

export default function FanOutCakes({ frames, onClick }) {
  const [fan, setFan] = useState(false);

  // Trigger the fan-out once the component mounts (or call setFan(true) from a prop/event)
  useEffect(() => {
    const t = setTimeout(() => setFan(true), 50); // tiny delay for transition
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`fan-stage ${fan ? "fan" : "start"}`}>
      {/* Left */}
      <PixelAnimator
        className="card cake"
        frames={frames}
        fps={3}
        scale={4}
        mode="img"
        onClick={onClick}
      />
      {/* Middle (original) */}
      <PixelAnimator
        className="card cake"
        frames={frames}
        fps={3}
        scale={4}
        mode="img"
        onClick={onClick}
      />
      {/* Right */}
      <PixelAnimator
        className="card cake"
        frames={frames}
        fps={3}
        scale={4}
        mode="img"
        onClick={onClick}
      />
    </div>
  );
}