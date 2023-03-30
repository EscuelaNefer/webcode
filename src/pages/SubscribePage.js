import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";

import Header from "../components/Header";
import Contactame from "../components/Contactame";
import Footer from "../components/Footer";

import SubscribiteImg from "../assets/img/subscribite.png";
import Subscribe from "../components/Subscribe";

export default function SubscribePage() {
  const { t } = useTranslation();
  return (
    <div className="container--grid">
      <Header />
      <Container className="MuiContainer-disableGutters">
        <Subscribe title={t("subscribite.title")} img={SubscribiteImg} />
      </Container>
      <Contactame />
      <Footer title="Natalia Barrera" description="Descripcion" />
    </div>
  );
}
