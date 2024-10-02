import PropTypes from "prop-types";
import "./Section3.css";

const Section3 = ({ className = "" }) => {
  return (
    <section className={`section6 ${className}`}>
      <div className="container19">
        <h2 className="heading32">Recent blog posts</h2>
        <div className="content41">
          <div className="blog-post-card17">
            <img
              className="image-icon24"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="content42">
              <div className="heading-and-text23">
                <div className="author15">Olivia Rhye • 1 Jan 2023</div>
                <div className="heading-and-icon9">
                  <h2 className="heading33">UX review presentations</h2>
                  <div className="icon-wrap9">
                    <img
                      className="arrow-up-right-icon"
                      loading="lazy"
                      alt=""
                      src="/arrowupright.svg"
                    />
                  </div>
                </div>
                <div className="supporting-text53">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </div>
              </div>
              <div className="categories17">
                <div className="badge45">
                  <div className="badge-base45">
                    <div className="text62">Design</div>
                  </div>
                </div>
                <div className="badge46">
                  <div className="badge-base46">
                    <div className="nested-badge">Research</div>
                  </div>
                </div>
                <div className="badge47">
                  <div className="badge-base47">
                    <div className="text63">Presentation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="blog-post-card18">
              <img
                className="image-icon25"
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="content43">
                <div className="heading-and-text24">
                  <div className="author15">Phoenix Baker • 1 Jan 2023</div>
                  <div className="heading-and-text25">
                    <div className="heading34">Migrating to Linear 101</div>
                    <div className="supporting-text53">
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </div>
                  </div>
                </div>
                <div className="categories18">
                  <div className="badge45">
                    <div className="badge-base48">
                      <div className="text62">Design</div>
                    </div>
                  </div>
                  <div className="badge49">
                    <div className="badge-base47">
                      <div className="text63">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card18">
              <img
                className="image-icon25"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="content43">
                <div className="heading-and-text24">
                  <div className="author15">Lana Steiner • 1 Jan 2023</div>
                  <div className="heading-and-text25">
                    <div className="heading34">Building your API Stack</div>
                    <div className="supporting-text53">
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </div>
                  </div>
                </div>
                <div className="categories19">
                  <div className="badge45">
                    <div className="badge-base50">
                      <div className="text62">Design</div>
                    </div>
                  </div>
                  <div className="badge49">
                    <div className="badge-base47">
                      <div className="text63">Research</div>
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

Section3.propTypes = {
  className: PropTypes.string,
};

export default Section3;
