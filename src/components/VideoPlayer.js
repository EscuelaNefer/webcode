import ReactPlayer from "react-player";

export default function VideoPlayer({ url }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        playing
        controls
        muted
        loop
        width="100%"
        height="100%"
      />
    </div>
  );
}
