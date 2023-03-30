import { WhatsApp } from "@material-ui/icons";

export default function Contactame({ text }) {
  let url;
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  )
    url = "https://api.whatsapp.com/send?phone=542914197428";
  else {
    url = "https://web.whatsapp.com/send?phone=542914197428";
  }
  if (text) {
    url += "&text=" + text;
  }

  return (
    <div className="contactUs">
      <a href={url} target="_blank" rel="noreferrer">
        <WhatsApp />
      </a>
    </div>
  );
}
