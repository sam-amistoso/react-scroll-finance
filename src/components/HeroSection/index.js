import React, { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrap,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroSectionElements';
import { ButtonS } from '../ButtonElements';
import Video from '../../video/video.mp4';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Online Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new accoun today and receive $250 in next payment.
        </HeroP>
        <HeroBtnWrap>
          <ButtonS
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonS>
        </HeroBtnWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
