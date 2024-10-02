import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section ${className}`}>
      <div className="container2">
        <h2 className="heading1">Recent blog posts</h2>
        <div className="content3">
          <div className="blog-post-card">
            <img
              className="image-icon"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="content4">
              <div className="heading-and-text">
                <div className="author">Sunday , 1 Jan 2023</div>
                <div className="heading-and-icon">
                  <h2 className="heading2">UX review presentations</h2>
                  <input className="icon-wrap" type="checkbox" />
                </div>
                <div className="supporting-text1">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </div>
              </div>
              <div className="categories">
                <div className="badge">
                  <div className="badge-base">
                    <div className="text2">Design</div>
                  </div>
                </div>
                <div className="badge">
                  <div className="badge-base1">
                    <div className="text3">Research</div>
                  </div>
                </div>
                <div className="badge2">
                  <div className="badge-base2">
                    <div className="number">Presentation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="blog-post-card1">
              <img
                className="image-icon1"
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="content5">
                <div className="heading-and-subheading">
                  <div className="author">Sunday , 1 Jan 2023</div>
                  <div className="heading-and-text2">
                    <div className="heading3">Migrating to Linear 101</div>
                    <div className="supporting-text1">
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </div>
                  </div>
                </div>
                <div className="categories1">
                  <div className="badge">
                    <div className="badge-base3">
                      <div className="text2">Design</div>
                    </div>
                  </div>
                  <div className="badge4">
                    <div className="badge-base2">
                      <div className="number">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card1">
              <img
                className="image-icon1"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="content5">
                <div className="heading-and-subheading">
                  <div className="author">Sunday , 1 Jan 2023</div>
                  <div className="heading-and-text2">
                    <div className="heading3">Building your API Stack</div>
                    <div className="supporting-text1">
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </div>
                  </div>
                </div>
                <div className="categories2">
                  <div className="badge">
                    <div className="badge-base5">
                      <div className="text2">Design</div>
                    </div>
                  </div>
                  <div className="badge4">
                    <div className="badge-base2">
                      <div className="number">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
