import CollageStyles from "./styles/Collage";

const Collage = () => (
  <CollageStyles>
    <img className="image--center" src="/static/wedding-7.jpeg" />
    <img className="image--top-left" src="/static/wedding-3.jpeg" />
    <img className="image--bottom-left" src="/static/wedding-1.jpeg" />
    <img className="image--top-right" src="/static/wedding-4.jpeg" />
    <img className="image--right" src="/static/wedding-5.jpeg" />
    <img className="image--bottom-right" src="/static/wedding-6.jpeg" />
  </CollageStyles>
);

export default Collage;
