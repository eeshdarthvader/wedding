import styled from "styled-components";
import Collage from "./Collage";
import theme from "../utils/theme";
import { mobile } from "../utils/mediaQueries";

const HomeStyles = styled.div`
  align-items: center;
  color: ${theme.offBlack};
  display: flex;
  flex-direction: column;
  font-family: ${theme.titleFont};
  justify-content: center;
  padding: 0.1rem 0;
  .hashtag {
    color: ${theme.copper};
    font-size: ${theme.h3FontSize};
  }
  .date {
    color: ${theme.offWhite};
    font-size: ${theme.subheadFontSize};
    ${mobile} {
      font-size: ${theme.h3FontSize};
    }
  }
  .location {
    color: ${theme.offWhite};
    font-size: ${theme.h3FontSize};
    margin-bottom: 6rem;
    ${mobile} {
      font-size: ${theme.h3FontSize};
    }
  }
`;

const Home = () => (
  <HomeStyles>
    <span className="hashtag">#SaJiniya</span>
    <span className="date">Feb 21, 2021</span>
    <span className="location">Delhi</span>
    <Collage />
  </HomeStyles>
);

export default Home;
