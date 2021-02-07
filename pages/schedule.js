import PageContent from "../components/styles/PageContent";
import ContentSection from "../components/styles/ContentSection";
import theme from "../utils/theme";

const Schedule = () => (
  <PageContent>
    <div className="heading">March 6: Reception</div>
    <ContentSection>
      <img src="/static/reception.jpeg" style={theme.rotateStyle(-1)} />
      <div className="content">
        Since we are getting married with only family around on 21st Feb, we do
        not want to miss the chance to celebrate our union with our friends. You
        are cordially invited to our wedding reception on 6th March 2021 for
        drinks and lunch in Bangalore.
        <div className="hashtag">Share your pics with #ballebihari</div>
        <div className="address">
          Brooks and Bonds Brewery
          <br />
          <a href="https://goo.gl/maps/cwFXXYAY6LsunKvf9">Location</a>
        </div>
      </div>
    </ContentSection>
  </PageContent>
);

export default Schedule;
