import styled from "styled-components";
import { tablet, mobile } from "../../utils/mediaQueries";
import theme from "../../utils/theme";

const HeaderStyles = styled.div`
  color: ${theme.sage};
  display: flex;
  font-family: ${theme.titleFont};
  height: 120px;
  line-height: 1.2;
  margin: 4rem 0;
  width: ${theme.maxContentWidth};
  position: relative;
  a {
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: ${theme.copper};
    }
  }
  .title {
    font-size: ${theme.titleFontSize};
    position: absolute;
    transform: rotate(-4deg);
    width: 300px;
    ${tablet} {
      animation-name: title-mobile;
      left: 20px;
    }
    ${mobile} {
      max-width: 300px;
      padding-right: 10px;
      width: 100%;
      font-size: 28px;
    }
  }
  .hashtag {
    margin-top: 110px;
    font-size: 24px;
    ${mobile} {
      margin-left: 16px;
    }
  }
  ul {
    bottom: 0px;
    display: flex;
    flex-direction: row;
    font-size: ${theme.subheadFontSize};
    justify-content: flex-end;
    position: absolute;
    right: 0px;
    li {
      margin-bottom: 0.5rem;
      margin-left: 3rem;
    }
    ${tablet} {
      animation-name: nav-mobile;
      right: 20px;
    }
    ${mobile} {
      font-size: 26px;
    }
  }
  ${tablet} {
    width: 100%;
  }
  ${mobile} {
    /* margin-bottom: 2rem; */
  }
`;

export default HeaderStyles;
