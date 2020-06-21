import React from "react";

import { Container, Separator } from "./styles";
import SeverButton from "../ServerButton";
const ServerList: React.FC = () => {
  return (
    <Container>
      <SeverButton isHome />
      <Separator />
      <SeverButton />
      <SeverButton />
      <SeverButton />
      <SeverButton hasNotifications />
      <SeverButton mentions={150} />
      <SeverButton />
      <SeverButton />
      <SeverButton />
      <SeverButton mentions={87} />
    </Container>
  );
};

export default ServerList;
