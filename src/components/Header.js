import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdMenu, MdLanguage } from "react-icons/md";

import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isLangExpanded, setIsLangExpanded] = useState(false);
  const lngs = {
    en: { nativeName: t("language.en") },
    es: { nativeName: t("language.es") },
  };

  return (
    <header>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="title">Natalia Barrera</div>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscribe"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {t("subscribe")}
            </NavLink>
          </li>
          {/*<li>
            <a href="./nueva">{t("bio")}</a>
          </li>
          <li>
            <a href="./nueva">{t("workshops")}</a>
          </li>
          <li>
            <a href="./nueva">{t("contact")}</a>
          </li>*/}
        </ul>
      </div>
      <div
        className={
          isLangExpanded ? "languages-menu expanded" : "languages-menu"
        }
      >
        <ul>
          {Object.keys(lngs).map((lng) => (
            <li key={lng}>
              <a
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                onClick={() => {
                  i18n.changeLanguage(lng);
                  setIsLangExpanded(!isLangExpanded);
                }}
              >
                {lngs[lng].nativeName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span
        className="icon"
        onClick={() => {
          setIsLangExpanded(!isLangExpanded);
          if (isNavExpanded) {
            setIsNavExpanded(!isNavExpanded);
          }
        }}
      >
        <MdLanguage />
      </span>
      <span
        className="icon just-mobile"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          if (isLangExpanded) {
            setIsLangExpanded(!isLangExpanded);
          }
        }}
      >
        <MdMenu />
      </span>
    </header>
  );
}
