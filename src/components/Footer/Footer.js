import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call</LinkTitle>
          <LinkItem href="tel:2347058498008">234-705-849-8008</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Email</LinkTitle>
          <LinkItem href="mailto:umukoroblessing@gmail.com">
            umukoroblessing@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Blessingkeyz</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/blessingkeyz">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://Linkedin.com/blessingkome">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://Twitter.com/blessingkeyzz">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
