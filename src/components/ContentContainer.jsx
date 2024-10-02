import HeadingAndIcon from "./HeadingAndIcon";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import "./ContentContainer.css";

const ContentContainer = ({ className = "" }) => {
  return (
    <div className={`content-container ${className}`}>
      <div className="heading-and-content2">
        <h2 className="heading38">All blog posts</h2>
        <div className="content47">
          <div className="row3">
            <div className="blog-post-card21">
              <img
                className="image-icon28"
                loading="lazy"
                alt=""
                src="/image1@2x.png"
              />
              <div className="content48">
                <div className="heading-and-text29">
                  <div className="author19">Alec Whitten • 1 Jan 2023</div>
                  <div className="heading-and-icon12">
                    <h2 className="heading39">Bill Walsh leadership lessons</h2>
                    <div className="icon-wrap12">
                      <img
                        className="arrow-up-right-icon3"
                        loading="lazy"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="supporting-text57">
                    Like to know the secrets of transforming a 2-14 team into a
                    3x Super Bowl winning Dynasty?
                  </div>
                </div>
                <div className="categories21">
                  <div className="badge54">
                    <div className="badge-base54">
                      <div className="tag-name">Leadership</div>
                    </div>
                  </div>
                  <div className="badge55">
                    <div className="badge-base55">
                      <div className="tag-name">Management</div>
                    </div>
                  </div>
                  <div className="badge56">
                    <div className="badge-base56">
                      <div className="text72">Presentation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card21">
              <img
                className="image-icon28"
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
              <div className="content49">
                <div className="heading-and-text30">
                  <div className="author19">Demi WIlkinson • 1 Jan 2023</div>
                  <div className="heading-and-icon13">
                    <h2 className="heading40">PM mental models</h2>
                    <div className="icon-wrap12">
                      <img
                        className="arrow-up-right-icon3"
                        loading="lazy"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="supporting-text57">
                    Mental models are simple expressions of complex processes or
                    relationships.
                  </div>
                </div>
                <div className="categories22">
                  <div className="badge54">
                    <div className="badge-base57">
                      <div className="tag-name">Product</div>
                    </div>
                  </div>
                  <div className="badge58">
                    <div className="badge-base58">
                      <div className="tag-name1">Research</div>
                    </div>
                  </div>
                  <div className="badge59">
                    <div className="badge-base59">
                      <div className="tag-name">Frameworks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card21">
              <img
                className="image-icon28"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <div className="content49">
                <div className="heading-and-text30">
                  <div className="author19">Candice Wu • 1 Jan 2023</div>
                  <div className="heading-and-icon13">
                    <h2 className="heading41">What is Wireframing?</h2>
                    <div className="icon-wrap12">
                      <img
                        className="arrow-up-right-icon3"
                        loading="lazy"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="supporting-text57">
                    Introduction to Wireframing and its Principles. Learn from
                    the best in the industry.
                  </div>
                </div>
                <div className="categories23">
                  <div className="badge54">
                    <div className="badge-base54">
                      <div className="tag-name3">Design</div>
                    </div>
                  </div>
                  <div className="badge61">
                    <div className="badge-base58">
                      <div className="tag-name">Research</div>
                    </div>
                  </div>
                  <div className="badge56">
                    <div className="badge-base56">
                      <div className="text72">Presentation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="blog-post-card21">
              <img
                className="image-icon28"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
              <div className="content49">
                <div className="heading-and-text30">
                  <div className="author19">Natali Craig • 1 Jan 2023</div>
                  <HeadingAndIcon heading="How collaboration makes us better designers" />
                  <div className="supporting-text57">
                    Collaboration can make our teams stronger, and our
                    individual designs better.
                  </div>
                </div>
                <div className="categories23">
                  <div className="badge54">
                    <div className="badge-base54">
                      <div className="tag-name3">Design</div>
                    </div>
                  </div>
                  <div className="badge61">
                    <div className="badge-base58">
                      <div className="tag-name">Research</div>
                    </div>
                  </div>
                  <div className="badge56">
                    <div className="badge-base56">
                      <div className="text72">Presentation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card21">
              <img
                className="image-icon28"
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
              <div className="content49">
                <div className="heading-and-text30">
                  <div className="author19">Drew Cano • 1 Jan 2023</div>
                  <HeadingAndIcon
                    heading="Our top 10 Javascript frameworks to use"
                    propMinWidth="197px"
                  />
                  <div className="supporting-text57">
                    JavaScript frameworks make development easy with extensive
                    features and functionalities.
                  </div>
                </div>
                <div className="categories25">
                  <div className="badge66">
                    <div className="badge-base66">
                      <div className="tag-name">Software Development</div>
                    </div>
                  </div>
                  <div className="badge67">
                    <div className="badge-base67">
                      <div className="tag-name">Tools</div>
                    </div>
                  </div>
                  <div className="badge68">
                    <div className="badge-base68">
                      <div className="tag-name">SaaS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card21">
              <img
                className="image-icon28"
                loading="lazy"
                alt=""
                src="/image-9@2x.png"
              />
              <div className="content49">
                <div className="heading-and-text30">
                  <div className="author19">Orlando Diggs • 1 Jan 2023</div>
                  <HeadingAndIcon
                    heading="Podcast: Creating a better CX Community"
                    propMinWidth="224px"
                  />
                  <div className="supporting-text57">
                    Starting a community doesn’t need to be complicated, but how
                    do you get started?
                  </div>
                </div>
                <div className="categories26">
                  <div className="badge54">
                    <div className="badge-base54">
                      <div className="tag-name1">Podcasts</div>
                    </div>
                  </div>
                  <div className="badge70">
                    <div className="badge-base55">
                      <div className="tag-name">Customer Success</div>
                    </div>
                  </div>
                  <div className="badge56">
                    <div className="badge-base56">
                      <div className="text72">Presentation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        propBorderTop="1px solid #eaecf0"
        arrowLeft="/arrowleft1.svg"
        propColor="#667085"
        propColor1="#7e56d9"
        propColor2="#667085"
        propColor3="#667085"
        propColor4="#667085"
        propColor5="#667085"
        propColor6="#667085"
        propColor7="#667085"
        propColor8="#667085"
        arrowRight="/arrowright1.svg"
      />
    </div>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
