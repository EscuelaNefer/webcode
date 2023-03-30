export default function Avatar({ img, alt, size }) {
  return (
    <div className="avatar">
      <img src={img} alt={alt} />
    </div>
  );
}
