import { darken, lighten, transparentize } from "polished"
import styled from "styled-components"
import { fontFamily, modularScale } from "../../design/typography"
import { WavesTop, WavesBottom } from "../Waves"
import Circles from "../../images/circles.svg"

export const HeaderWrapper = styled.div`
  width: calc(100% - 305px);
  padding-right: 305px;
  height: 391px;
  padding-top: 67px;
  position: relative;
`

export const BackgroundWrapper = styled.div`
  height: 391px;
  padding-top: 67px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const StyledCircles = styled(Circles)`
  position: absolute;
  top: 50%;
  margin-top: -200px;
`

export const StyledWavesTop = styled(WavesTop)`
  opacity: ${props => (props.theme.name === "dark" ? 0.8 : 0.2)};
  top: -10%;
  transform: scaleX(-1);
`

export const StyledWavesBottom = styled(WavesBottom)`
  opacity: ${props => (props.theme.name === "dark" ? 0.8 : 0.2)};
  bottom: -30%;
  transform: scaleX(-1);
`

export const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  margin-left: -16px;
  background: ${props => transparentize(0.3, props.theme.main.background)};
  padding: 16px;
  backdrop-filter: blur(14px);

  @media screen and (max-width: 767px) {
    right: 40px;
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  font-family: ${fontFamily.header};
  font-size: ${modularScale(6).fontSize}px;
  line-height: ${modularScale(6).lineHeight}px;
  letter-spacing: -1.75px;
  margin-top: 0;
  margin-bottom: 16px;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  color: ${props =>
    props.theme.name === "dark"
      ? transparentize(0.1, props.theme.main.foreground)
      : transparentize(0.1, props.theme.main.foreground)};

  & + &::before {
    content: "•";
    margin: 0 8px;
  }

  @media screen and (max-width: 767px) {
    & + & {
      margin-top: 8px;
    }

    & + &::before {
      display: none;
    }
  }
`

export const Popover = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
  backdrop-filter: blur(14px);
  background: ${props =>
    props.theme.name === "dark"
      ? transparentize(0.3, props.theme.main.background)
      : transparentize(0.3, props.theme.main.background)};

  &::before {
    position: absolute;
    left: 16px;
    bottom: 100%;
    content: "";
    width: 0;
    height: 0;
    backdrop-filter: blur(14px);
    border-style: solid;
    border-width: 0 3.5px 4px 3.5px;
    border-color: transparent transparent
      ${props =>
        props.theme.name === "dark"
          ? transparentize(0.3, props.theme.main.background)
          : transparentize(0.3, props.theme.main.background)}
      transparent;
  }
`

export const PopoverToggler = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px dashed
    ${props =>
      props.theme.name === "dark"
        ? transparentize(0.1, props.theme.main.foreground)
        : transparentize(0.1, props.theme.main.foreground)};

  &:hover ${Popover} {
    display: block;
  }
`
