import Avatar from "./Avatar";

export default function Item({ img, title, description, isSubscribe }) {
  return (
    <div className="item">
      <Avatar img={img} />
      <div className="item-content">
        <div className="title">{title}</div>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}
