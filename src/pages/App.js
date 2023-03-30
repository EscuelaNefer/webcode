//@use 'styles/_header.scss';
import { Container } from "@material-ui/core";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import Item from "../components/Item";
import Contactame from "../components/Contactame";
import Footer from "../components/Footer";

import Video from "../assets/videos/institucional.mp4";
import AlquimiaImg from "../assets/img/alquimia.png";
import TalleresImg from "../assets/img/talleres.png";
import SubscribiteImg from "../assets/img/subscribite.png";
import Subscribe from "../components/Subscribe";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container--grid">
      <Header />
      <Container className="MuiContainer-disableGutters">
        <VideoPlayer url={Video} />
        <Item
          title={t("alquimia.title")}
          description={t("alquimia.description")}
          img={AlquimiaImg}
        />
        <Item
          title={t("talleres.title")}
          description={t("talleres.description")}
          img={TalleresImg}
        />
        <Subscribe title={t("subscribite.title")} img={SubscribiteImg} />
      </Container>
      <Contactame />
      <Footer title="Natalia Barrera" description="Descripcion" />
    </div>
  );
}
export default function WrappedApp() {
  return (
    <Suspense fallback="...cargando">
      <App />
    </Suspense>
  );
}
