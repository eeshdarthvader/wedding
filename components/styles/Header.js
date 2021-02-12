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
  .arrow,
  .arrow:before {
    position: absolute;
    left: 40%;
    ${mobile} {
      left: 50%;
    }
  }

  .arrow {
    width: 10px;
    height: 10px;
    top: 50%;
    margin: -10px 0 0 -82px;
    -webkit-transform: rotate(-45deg);
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
  }

  .arrow:before {
    top: 40%;
    content: "";
    width: 10px;
    height: 10px;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
    ${mobile} {
      left: 50%;
    }
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
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
      font-size: 20px;
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
