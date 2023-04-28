import Avatar from "./Avatar";

export default function Subscribe({ title, img }) {
  return (
    <div className="item">
      <Avatar img={img} />
      <div className="item-content">
        <div className="title">{title}</div>
        <iframe
          id="subscribe-iframe"
          data-skip-lazy=""
          src="https://nataliabarrera.ipzmarketing.com/f/jL5Syunhplc"
          scrolling="no"
          width="100%"
          height="500px"
          className="ipz-iframe"
        ></iframe>
      </div>
    </div>
  );
}
