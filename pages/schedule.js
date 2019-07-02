import PageContent from '../components/styles/PageContent';
import ContentSection from '../components/styles/ContentSection';
import theme from '../utils/theme';

const Schedule = () => (
  <PageContent>
    <div className="heading">Thursday Sept. 26</div>
    <ContentSection>
      <img
        src="/static/hairy-lemon-building.jpg"
        style={theme.rotateStyle(-1)}
      />
      <div className="content">
        <div className="subtitle">8pm</div>
        Gathering for drinks to catch up and welcome everyone to Dublin!
        <div className="address">
          The Hairy Lemon
          <br />
          Stephen St. Lower, Dublin 2<br />
          <a href="https://thehairylemon.ie/">thehairylemon.ie</a>
        </div>
      </div>
    </ContentSection>
    <div className="heading">Friday Sept. 27</div>
    <ContentSection>
      <img src="/static/flowers.jpg" style={theme.rotateStyle(2)} />
      <div className="content">
        <div className="subtitle">2pm</div>
        Wedding ceremony, Joshua Dukes presiding.
        <div className="address">
          Fallon & Byrne, 2nd floor
          <br />
          11-17 Exchequer Street, Dublin 2<br />
          <a href="http://www.fallonandbyrne.com/">fallonandbyrne.com</a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img src="/static/kehoes-inside.jpg" style={theme.rotateStyle(-1)} />
      <div className="content">
        <div className="subtitle">3:30pm</div>
        Stroll up Grafton Street for pints and cocktails at Kehoe’s – some say
        the best pint of Guinness in Dublin.
        <div className="address">
          Kehoe's Pub
          <br />
          9 Anne St South, Dublin 2<br />
          <a href="https://kehoesdublin.ie/">kehoesdublin.ie</a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img
        src="/static/fallon-and-byrne-wedding.jpg"
        style={theme.rotateStyle(1)}
      />
      <div className="content">
        <div className="subtitle">5:30pm</div>
        Dinner and reception back at Fallon & Byrne. Bring your instruments!
        <div className="address">
          Fallon & Byrne, 2nd floor
          <br />
          11-17 Exchequer Street, Dublin 2<br />
          <a href="http://www.fallonandbyrne.com/">fallonandbyrne.com</a>
        </div>
      </div>
    </ContentSection>
    <div className="heading">Saturday Sept. 28</div>
    <ContentSection>
      <img src="/static/brother-hubbard.jpg" style={theme.rotateStyle(-2)} />
      <div className="content">
        <div className="subtitle">Noon</div>
        Brunch at Brother Hubbard
        <div className="address">
          Brother Hubbard North
          <br />
          153 Capel Street, Dublin 1<br />
          <a href="https://brotherhubbard.ie/locations/north">
            brotherhubbard.ie
          </a>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <img src="/static/spoons.jpg" style={theme.rotateStyle(-2)} />
      <div className="content">
        <div className="subtitle">2pm onwards</div>
        Tunes and hang
        <div className="address">
          ??
          <br />
          ??
          <br />
          <a>link</a>
        </div>
      </div>
    </ContentSection>
  </PageContent>
);

export default Schedule;
