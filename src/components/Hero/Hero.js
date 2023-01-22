import React from 'react';
 
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To  <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Umukoro Blessing is a Frontend Mobile and Web Developer
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/blessingkome/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;