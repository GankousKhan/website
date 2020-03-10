import { Link } from "gatsby"
import { lighten } from "polished"
import styled from "styled-components"

export const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  svg {
    width: 12px;
    transform: rotate(90deg);
    margin: 6px;
  }

  svg path {
    fill: ${props => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  }
`

export const StyledLink = styled(Link)`
  color: ${props => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: ${props =>
      props.theme.name === "dark"
        ? lighten(0.15, props.theme.main.link)
        : props.theme.main.link};
  }
`

export const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`
