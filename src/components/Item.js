import Avatar from "./Avatar";

export default function Item({
  img,
  title,
  description,
  subtitle,
  infoLink,
  infoText,
}) {
  return (
    <div className="item">
      <Avatar img={img} />
      <div className="item-content">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <a href={infoLink} target="_blank" rel="noreferrer">
          {infoText}
        </a>
      </div>
    </div>
  );
}
