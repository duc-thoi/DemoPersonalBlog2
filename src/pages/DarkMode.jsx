import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./DarkMode.css";

const DarkMode = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`dark-mode ${className}`}>
      <div className="header-section">
        <div className="container">
          <div className="content1">
            <div className="heading-and-supporting-text">
              <div className="heading-and-subheading">
                <div className="subheading">Our blog</div>
                <div className="heading">Stories and interviews</div>
              </div>
              <div className="supporting-text">
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </div>
            </div>
            <div className="email-capture">
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">Email</div>
                    <div className="input">
                      <div className="content2">
                        <img className="mail-icon" alt="" src="/mail.svg" />
                        <div className="text">Enter your email</div>
                      </div>
                      <img className="help-icon" alt="" src="/help-icon.svg" />
                    </div>
                  </div>
                  <div className="hint-text">
                    {`We care about your data in our `}
                    <span className="privacy-policy">privacy policy</span>
                  </div>
                </div>
              </div>
              <div className="button4">
                <div className="button-base">
                  <div className="text1">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="navbar1">
          <a className="your-name1">Your Name</a>
          <div className="menu1">
            <div className="blog">
              <div className="blog-container">
                <a className="blog1">Blog</a>
              </div>
            </div>
            <div className="projects">
              <a className="projects1">Projects</a>
            </div>
            <div className="projects">
              <a className="projects1">About</a>
            </div>
            <div className="projects">
              <a className="newsletter1">Newsletter</a>
            </div>
            <div className="toggle-mode">
              <img
                className="iconoutlinesun"
                loading="lazy"
                alt=""
                src="/iconoutlinesun.svg"
              />
              <div
                className="iconoutlinemoon"
                onClick={onIconoutlinemoonContainerClick}
              >
                <img
                  className="moon-icon"
                  loading="lazy"
                  alt=""
                  src="/moon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="frame-main">
        <section className="container-wrapper">
          <div className="container1">
            <b className="the-blog">THE BLOG</b>
          </div>
        </section>
        <section className="section">
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
                    <div className="badge1">
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
                          Linear helps streamline software projects, sprints,
                          tasks, and bug tracking. Here’s how to get...
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
                          The rise of RESTful APIs has been met by a rise in
                          tools for creating, testing, and manag...
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
        <section className="section-wrapper">
          <div className="section1">
            <div className="container3">
              <div className="content7">
                <div className="blog-post-card3">
                  <img
                    className="image-icon3"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                    onClick={onImageClick}
                  />
                  <div className="content8">
                    <div className="heading-and-text">
                      <div className="author">Sunday , 1 Jan 2023</div>
                      <div className="heading-and-icon1" onClick={onImageClick}>
                        <h2 className="heading5">
                          Grid system for better Design User Interface
                        </h2>
                        <input className="icon-wrap" type="checkbox" />
                      </div>
                      <div className="supporting-text1">
                        A grid system is a design tool used to arrange content
                        on a webpage. It is a series of vertical and horizontal
                        lines that create a matrix of intersecting points, which
                        can be used to align and organize page elements. Grid
                        systems are used to create a consistent look and feel
                        across a website, and can help to make the layout more
                        visually appealing and easier to navigate.
                      </div>
                    </div>
                    <div className="categories3">
                      <div className="badge">
                        <div className="badge-base">
                          <div className="text2">Design</div>
                        </div>
                      </div>
                      <div className="badge8">
                        <div className="badge-base2">
                          <div className="number">Interface</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-inner-wrapper">
          <div className="featured-inner">
            <div className="heading-and-content">
              <h2 className="heading1">All blog posts</h2>
              <div className="content9">
                <div className="row">
                  <div className="blog-post-card4">
                    <img
                      className="image-icon4"
                      rows={12}
                      cols={19}
                      alt=""
                      src="/image1@2x.png"
                    />
                    <div className="content10">
                      <div className="heading-and-subheading">
                        <div className="author">Sunday , 1 Jan 2023</div>
                        <div className="heading-and-icon2">
                          <h2 className="heading7">
                            Bill Walsh leadership lessons
                          </h2>
                          <input className="icon-wrap" type="checkbox" />
                        </div>
                        <div className="supporting-text1">
                          Like to know the secrets of transforming a 2-14 team
                          into a 3x Super Bowl winning Dynasty?
                        </div>
                      </div>
                      <div className="categories4">
                        <div className="badge">
                          <div className="badge-base">
                            <div className="number">Leadership</div>
                          </div>
                        </div>
                        <div className="badge10">
                          <div className="badge-base10">
                            <div className="number">Management</div>
                          </div>
                        </div>
                        <div className="badge11">
                          <div className="badge-base2">
                            <div className="number">Presentation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-card4">
                    <img
                      className="image-icon5"
                      loading="lazy"
                      alt=""
                      src="/image-5@2x.png"
                    />
                    <div className="content4">
                      <div className="heading-and-text">
                        <div className="author">Sunday , 1 Jan 2023</div>
                        <div className="heading-and-icon3">
                          <h2 className="heading8">PM mental models</h2>
                          <input className="icon-wrap" type="checkbox" />
                        </div>
                        <div className="supporting-text1">
                          Mental models are simple expressions of complex
                          processes or relationships.
                        </div>
                      </div>
                      <div className="categories5">
                        <div className="badge">
                          <div className="badge-base3">
                            <div className="number">Product</div>
                          </div>
                        </div>
                        <div className="badge1">
                          <div className="badge-base1">
                            <div className="text3">Research</div>
                          </div>
                        </div>
                        <div className="badge14">
                          <div className="badge-base14">
                            <div className="number">Frameworks</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-card4">
                    <img
                      className="image-icon5"
                      loading="lazy"
                      alt=""
                      src="/image-6@2x.png"
                    />
                    <div className="content4">
                      <div className="heading-and-text">
                        <div className="author">Sunday , 1 Jan 2023</div>
                        <div className="heading-and-icon3">
                          <h2 className="heading9">What is Wireframing?</h2>
                          <input className="icon-wrap" type="checkbox" />
                        </div>
                        <div className="supporting-text1">
                          Introduction to Wireframing and its Principles. Learn
                          from the best in the industry.
                        </div>
                      </div>
                      <div className="categories6">
                        <div className="badge">
                          <div className="badge-base">
                            <div className="text2">Design</div>
                          </div>
                        </div>
                        <div className="badge1">
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
                </div>
                <div className="row">
                  <div className="blog-post-card4">
                    <img
                      className="image-icon5"
                      loading="lazy"
                      alt=""
                      src="/image-7@2x.png"
                    />
                    <div className="content4">
                      <div className="heading-and-text">
                        <div className="author">Sunday , 1 Jan 2023</div>
                        <div className="heading-and-icon3">
                          <h2 className="heading10">
                            How collaboration makes us better designers
                          </h2>
                          <input className="icon-wrap" type="checkbox" />
                        </div>
                        <div className="supporting-text1">
                          Collaboration can make our teams stronger, and our
                          individual designs better.
                        </div>
                      </div>
                      <div className="categories6">
                        <div className="badge">
                          <div className="badge-base">
                            <div className="text2">Design</div>
                          </div>
                        </div>
                        <div className="badge1">
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
                  <div className="blog-post-card4">
                    <img
                      className="image-icon5"
                      loading="lazy"
                      alt=""
                      src="/image-8@2x.png"
                    />
                    <div className="content4">
                      <div className="heading-and-text">
                        <div className="author">Sunday , 1 Jan 2023</div>
                        <div className="heading-and-icon3">
                          <h2 className="heading11">
                            Our top 10 Javascript frameworks to use
                          </h2>
                          <input className="icon-wrap" type="checkbox" />
                        </div>
                        <div className="supporting-text1">
                          JavaScript frameworks make development easy with
                          extensive features and functionalities.
                        </div>
                      </div>
                      <div className="categories8">
                        <div className="badge21">
                          <div className="badge-base5">
                            <div className="number">Software Development</div>
                          </div>
                        </div>
                        <div className="badge22">
                          <div className="badge-base2">
                            <div className="number">Tools</div>
                          </div>
                        </div>
                        <div className="badge23">
                          <div className="badge-base23">
                            <div className="number">SaaS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-card4">
                    <img
                      className="image-icon5"
                      loading="lazy"
                      alt=""
                      src="/image-9@2x.png"
                    />
                    <div className="content4">
                      <div className="heading-and-text">
                        <div className="author">Sunday , 1 Jan 2023</div>
                        <div className="heading-and-icon3">
                          <h2 className="heading10">
                            Podcast: Creating a better CX Community
                          </h2>
                          <input className="icon-wrap" type="checkbox" />
                        </div>
                        <div className="supporting-text1">
                          Starting a community doesn’t need to be complicated,
                          but how do you get started?
                        </div>
                      </div>
                      <div className="categories9">
                        <div className="badge">
                          <div className="badge-base">
                            <div className="text3">Podcasts</div>
                          </div>
                        </div>
                        <div className="badge25">
                          <div className="badge-base10">
                            <div className="number">Customer Success</div>
                          </div>
                        </div>
                        <div className="badge22">
                          <div className="badge-base2">
                            <div className="text28">Presentation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination">
              <div className="previous-button-wrapper">
                <div className="button5">
                  <div className="button-base1">
                    <img
                      className="arrow-left-icon"
                      loading="lazy"
                      alt=""
                      src="/arrowleft.svg"
                    />
                    <div className="text29">Previous</div>
                  </div>
                </div>
              </div>
              <div className="pagination-numbers">
                <div className="pagination-number-base">
                  <div className="content16">
                    <div className="number">1</div>
                  </div>
                </div>
                <div className="pagination-number-base1">
                  <div className="content17">
                    <div className="number">2</div>
                  </div>
                </div>
                <div className="pagination-number-base1">
                  <div className="content18">
                    <div className="number">3</div>
                  </div>
                </div>
                <div className="pagination-number-base1">
                  <div className="content19">
                    <div className="number">...</div>
                  </div>
                </div>
                <div className="pagination-number-base1">
                  <div className="content17">
                    <div className="number">8</div>
                  </div>
                </div>
                <div className="pagination-number-base1">
                  <div className="content17">
                    <div className="number">9</div>
                  </div>
                </div>
                <div className="pagination-number-base1">
                  <div className="content22">
                    <div className="number">10</div>
                  </div>
                </div>
              </div>
              <div className="previous-button-wrapper">
                <div className="button5">
                  <div className="button-base1">
                    <div className="text30">Next</div>
                    <img
                      className="arrow-left-icon"
                      loading="lazy"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container4">
          <div className="div">© 2023</div>
          <div className="menu2">
            <h3 className="twitter">{`Twitter `}</h3>
            <h3 className="linkedin">LinkedIn</h3>
            <h3 className="email">Email</h3>
            <h3 className="rss-feed">RSS feed</h3>
            <h3 className="add-to-feedly">Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

DarkMode.propTypes = {
  className: PropTypes.string,
};

export default DarkMode;
