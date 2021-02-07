import styled from "styled-components";
import { tablet, mobile } from "../../utils/mediaQueries";
import theme from "../../utils/theme";

const PageContent = styled.div`
  align-items: flex-start;
  background-color: ${theme.white};
  box-shadow: ${theme.boxShadow};
  color: ${theme.offBlack};
  flex-direction: column;
  padding: 2rem;
  width: ${theme.maxContentWidth};
  a {
    color: ${theme.lightSage};
    text-decoration: underline;
  }
  .hero-image {
    margin-bottom: 3rem;
    width: 100%;
  }
  .heading {
    color: ${theme.lightSage};
    display: block;
    font-family: ${theme.titleFont};
    font-size: ${theme.subheadFontSize};
    margin-bottom: 2rem;
  }
  ${tablet} {
    box-shadow: none;
    width: 100vw;
  }
  .label {
    color: grey;
    font-family: cursive;
  }
  .input {
    margin-bottom: 20px;
    border: 1px solid #e5e5e5;
    padding: 12px;
    border-radius: 4px;
  }

  .save {
    font-size: 14px;
    padding: 8px;
    width: 100px;
    background: #ededed;
    border: 1px solid #f3eeee;
    color: #5f5f5f;
  }
`;

export default PageContent;
