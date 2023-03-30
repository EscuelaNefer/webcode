import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
//import { Link } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import {
  Facebook,
  WhatsApp,
  Email,
  Instagram,
  YouTube,
} from "@material-ui/icons";
import { ReactComponent as TikTok } from "../assets/logo-tiktok.svg";
import { ReactComponent as Cafecito } from "../assets/cafecito_logo.svg";

function Copyright() {
  const { t } = useTranslation();

  return (
    <div className="copyright-content">
      <Typography variant="body1" align="center">
        <Link to="/politicas">{t("politics")}</Link>
        <Link to="/tyc">{t("tyc")}</Link>
      </Typography>
      <Typography variant="body2" align="center">
        <Link to="/">Natalia Barrera</Link>
        {" © "}
        {new Date().getFullYear()} {t("copyrightText")}
      </Typography>
    </div>
  );
}

function url() {
  let u;
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  )
    u = "https://api.whatsapp.com/send?phone=542914197428";
  else {
    u = "https://web.whatsapp.com/send?phone=542914197428";
  }

  return u;
}

export default function Footer(props) {
  const { t } = useTranslation();

  return (
    <footer>
      <Container>
        <div className="title">Natalia Barrera</div>
        <div className="footer-container">
          <ul className="no-mobile">
            <li>
              <Link to="/">Natalia Barrera</Link>
            </li>
            <li>
              <Link to="/subscribe">{t("subscribe")}</Link>
            </li>
            {/* <li>
              <a href="/">{t("alquimia.title")}</a>
            </li>
            <li>
              <a href="/">{t("workshops")}</a>
            </li>
            <li>
              <a href="/">{t("contact")}</a>
            </li> */}
          </ul>
          <ul className="no-mobile">
            <li>
              <a href="/">{t("contactTypes")}</a>
            </li>
            <li>
              <WhatsApp className="icon" />
              <a href={url()} target="_blank" rel="noreferrer">
                +54 291-4197428
              </a>
            </li>
            <li>
              <Email className="icon" />
              <a href="mailto:info@nataliabarrera.com">
                info@nataliabarrera.com
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">{t("socialNetwors")}</a>
            </li>
            <li>
              <Instagram className="icon" />
              <a
                href="https://www.instagram.com/nataliabarrera.escuelanefer/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <Facebook className="icon" />
              <a
                href="https://www.facebook.com/natu.lina.5"
                target="_blank"
                rel="noreferrer"
              >
                Natalia Barrera
              </a>
            </li>
            <li>
              <Facebook className="icon" />
              <a
                href="https://www.facebook.com/nataliabarrera.escuelanefer"
                target="_blank"
                rel="noreferrer"
              >
                Natalia Barrera - Escuela Nefer
              </a>
            </li>
            <li>
              <YouTube className="icon" />
              <a
                href="https://www.youtube.com/@nataliabarrera.escuelanefer"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <TikTok className="MuiSvgIcon-root icon" />
              <a
                href="https://www.tiktok.com/@natalianoelbarrera"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </li>
            <li>
              <Cafecito className="MuiSvgIcon-root icon" />
              <a
                href="https://cafecito.app/nataliabarrera"
                target="_blank"
                rel="noreferrer"
              >
                {t("cafecitoApp")}
              </a>
            </li>
          </ul>
        </div>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
