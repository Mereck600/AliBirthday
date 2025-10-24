export default function ThreeCakes({ imgs = [], onClick }) {
  // imgs: array of image sources (e.g., [cake1, cake2, cake3])
  return (
    <div className="three-cakes">
      {imgs.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`ali ${i - 1}`}
          className={`cake-card cake-${i}`}
          onClick={onClick}
          draggable={false}
        />
      ))}
    </div>
  );
}
