import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Section3 from "../components/Section3";
import FrameComponent4 from "../components/FrameComponent4";
import ContentContainer from "../components/ContentContainer";
import "./LigthMode.css";

const LigthMode = () => {
  const navigate = useNavigate();

  const onToggleModeContainerClick = useCallback(() => {
    navigate("/frame-1000000804");
  }, [navigate]);

  return (
    <div className="ligth-mode">
      <section className="header2">
        <header className="navbar3">
          <a className="your-name3">Your Name</a>
          <div className="menu8">
            <div className="blog4">
              <a className="blog5">Blog</a>
            </div>
            <div className="blog4">
              <a className="blog5">Projects</a>
            </div>
            <div className="blog4">
              <a className="blog5">About</a>
            </div>
            <div className="blog4">
              <a className="newsletter6">Newsletter</a>
            </div>
            <div className="toggle-mode2" onClick={onToggleModeContainerClick}>
              <img
                className="iconoutlinesun2"
                loading="lazy"
                alt=""
                src="/iconoutlinesun1.svg"
              />
              <div className="iconoutlinemoon2">
                <img className="iconoutlinesun2" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </header>
        <div className="container13">
          <b className="the-blog2">THE BLOG</b>
        </div>
      </section>
      <div className="header-section1">
        <div className="container14">
          <div className="content28">
            <div className="heading-and-supporting-text1">
              <div className="heading-and-subheading1">
                <div className="subheading1">Our blog</div>
                <div className="heading14">Stories and interviews</div>
              </div>
              <div className="supporting-text11">
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </div>
            </div>
            <div className="email-capture1">
              <div className="input-field1">
                <div className="input-field-base1">
                  <div className="input-with-label1">
                    <div className="label1">Email</div>
                    <div className="input1">
                      <div className="content29">
                        <img className="mail-icon1" alt="" src="/mail.svg" />
                        <div className="text38">Enter your email</div>
                      </div>
                      <img className="help-icon1" alt="" src="/help-icon.svg" />
                    </div>
                  </div>
                  <div className="hint-text1">
                    {`We care about your data in our `}
                    <span className="privacy-policy1">privacy policy</span>
                  </div>
                </div>
              </div>
              <div className="button7">
                <div className="button-base3">
                  <div className="text39">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section3 />
      <FrameComponent4 />
      <section className="content-container-wrapper">
        <ContentContainer />
      </section>
      <section className="footer5">
        <div className="container15">
          <div className="div3">© 2023</div>
          <div className="menu9">
            <h3 className="twitter5">{`Twitter `}</h3>
            <h3 className="linkedin5">LinkedIn</h3>
            <h3 className="email5">Email</h3>
            <h3 className="rss-feed5">RSS feed</h3>
            <h3 className="add-to-feedly5">Add to Feedly</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LigthMode;
