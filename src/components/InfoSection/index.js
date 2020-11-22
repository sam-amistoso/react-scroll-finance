import React from 'react';
import { ButtonR } from '../ButtonElements';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrap,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  lightText,
  description,
  darkText,
  buttonLabel,
  primary,
  img,
  alt,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrap>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonR
                    to='/'
                    smooth='true'
                    duration={500}
                    spy='true'
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ButtonR>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrap>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
