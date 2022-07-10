import React from "react";
import Section from "@blog/layouts/Section";
import Link from "next/link";

import { FooterContainer, Nav, List, ListItem } from "./FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <Section>
        <Nav>
          <List>
            <ListItem>
              <Link href="www.twitter.com">Twitter</Link>
            </ListItem>
            <ListItem>
              <Link href="www.instagram.com">Instagram</Link>
            </ListItem>
            <ListItem>
              <Link href="www.gertrudenyenyeshi.com">My Website</Link>
            </ListItem>
          </List>
        </Nav>
      </Section>
    </FooterContainer>
  );
}

export default Footer;
