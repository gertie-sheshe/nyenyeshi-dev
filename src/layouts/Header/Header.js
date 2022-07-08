import React from "react";
import Link from "next/link";

import { HeaderContainer, H1, Nav, List, ListItem } from "./HeaderStyles";

function Header() {
  return (
    <HeaderContainer>
      <H1>nyenyeshi.dev</H1>
      <Nav>
        <List>
          <ListItem>
            <Link href="/frontend">Frontend</Link>
          </ListItem>
          <ListItem>
            <Link href="/accessibility">Accessibility</Link>
          </ListItem>
          <ListItem>
            <Link href="/other">Other</Link>
          </ListItem>
        </List>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
