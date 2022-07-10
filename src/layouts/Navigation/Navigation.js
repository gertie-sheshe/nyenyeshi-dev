import React from "react";
import Link from "next/link";

import { Nav, List, ListItem } from "./NavigationStyles";

function Navigation() {
  return (
    <Nav>
      <List>
        <ListItem>
          <Link href="/">All</Link>
        </ListItem>
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
  );
}

export default Navigation;
