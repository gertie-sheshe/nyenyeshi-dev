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
              <a href="https://twitter.com/">Twitter</a>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/">Instagram</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.gertrudenyenyeshi.com/">My Website</Link>
            </ListItem>
          </List>
        </Nav>
      </Section>
    </FooterContainer>
  );
}

export default Footer;
