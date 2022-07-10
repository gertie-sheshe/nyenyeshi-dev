import React from "react";
import Navigation from "@blog/layouts/Navigation";

import { HeaderContainer, H1 } from "./HeaderStyles";

function Header() {
  return (
    <HeaderContainer>
      <H1>nyenyeshi.dev</H1>
      <Navigation />
    </HeaderContainer>
  );
}

export default Header;
