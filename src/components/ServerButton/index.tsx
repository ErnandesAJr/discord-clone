import React from "react";
import Logo from "../../assets/logo-rocketseat.svg";
import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      className={selected ? "active" : ""}
      mentions={mentions}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
