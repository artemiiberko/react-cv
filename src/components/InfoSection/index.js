import React from "react"
import {
  Column1,
  Column2,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  TechWrap,
  TechImg,
  ImgWrap,
  Img,
} from "./InfoElements"
import img from "../../images/svg-1.svg"
import tech_1 from "../../images/tech_1.png"
import tech_2 from "../../images/tech_2.png"
import tech_3 from "../../images/tech_3.png"

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightTextTitle,
  headline,
  darkTextDesc,
  description,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightTextTitle={lightTextTitle}>{headline}</Heading>
                <Subtitle darkTextDesc={darkTextDesc}>{description}</Subtitle>
                <TechWrap>
                  <TechImg src={tech_1} />
                  <TechImg src={tech_2} />
                  <TechImg src={tech_3} />
                </TechWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
