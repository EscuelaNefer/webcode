import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";

import VideoPlayer from "../components/VideoPlayer";
import Item from "../components/Item";

import Video from "../assets/videos/institucional.mp4";
import AlquimiaImg from "../assets/img/alquimia.png";
import TalleresImg from "../assets/img/talleres.png";
import SubscribiteImg from "../assets/img/subscribite.png";
import Subscribe from "../components/Subscribe";

export default function Home() {
  const { t } = useTranslation();
  return (
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
  );
}
