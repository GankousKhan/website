import styled, { css } from "styled-components"
import { Link } from "gatsby"
import fontFamily from "../../design/typography"

export const Content = styled.div`
  flex: 1 1 calc(100% - 305px);
  width: calc(100% - 305px);
  padding: 64px 0;
`

export const Sidebar = styled.div`
  width: 240px;
  flex: 0 0 240px;
  border-left: 1px solid
    ${props => (props.theme.name === "dark" ? "#172129" : "#C7D3D9")};
  background: ${props => (props.theme.name === "dark" ? "#172129" : "#fff")};
  color: ${props => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  padding: 64px 32px;

  @media screen and (max-width: 767px) {
    width: auto;
    padding: 64px;
    flex-basis: auto;

    & > :first-child {
      margin-top: 0;
    }
  }
`

export const SidebarHeader = styled.div`
  font-family: ${fontFamily.header};
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
`

const ExtraLinks = styled.div`
  margin-top: 16px;
`

export const RecommendedReading = styled(ExtraLinks)``

export const ExternalResources = styled(ExtraLinks)``

const extraLink = css`
  display: flex;
  align-items: center;
  color: ${props => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  margin-top: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: linear-gradient(92.97deg, #feaf6d 0%, #ff70a5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  svg {
    width: 14px;
    flex: 0 0 14px;
    transform: rotate(90deg);
    margin-left: 6px;
  }

  svg path {
    fill: ${props => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  }
`

export const ExtraLinkInternal = styled(Link)`
  ${extraLink};
`

export const ExtraLinkExternal = styled.a`
  ${extraLink};
`

export const ExtraLinkText = styled.div`
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(92.97deg, #feaf6d 0%, #ff70a5 100%);
  }
`
