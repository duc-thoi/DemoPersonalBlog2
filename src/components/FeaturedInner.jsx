import PropTypes from "prop-types";
import "./FeaturedInner.css";

const FeaturedInner = ({ className = "" }) => {
  return (
    <div className={`featured-inner ${className}`}>
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
                    <h2 className="heading7">Bill Walsh leadership lessons</h2>
                    <input className="icon-wrap" type="checkbox" />
                  </div>
                  <div className="supporting-text1">
                    Like to know the secrets of transforming a 2-14 team into a
                    3x Super Bowl winning Dynasty?
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
                  <div className="badge10">
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
                    Mental models are simple expressions of complex processes or
                    relationships.
                  </div>
                </div>
                <div className="categories5">
                  <div className="badge">
                    <div className="badge-base3">
                      <div className="number">Product</div>
                    </div>
                  </div>
                  <div className="badge">
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
                    Introduction to Wireframing and its Principles. Learn from
                    the best in the industry.
                  </div>
                </div>
                <div className="categories6">
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
                    JavaScript frameworks make development easy with extensive
                    features and functionalities.
                  </div>
                </div>
                <div className="categories8">
                  <div className="badge21">
                    <div className="badge-base5">
                      <div className="number">Software Development</div>
                    </div>
                  </div>
                  <div className="badge">
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
                    Starting a community doesn’t need to be complicated, but how
                    do you get started?
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
                  <div className="badge">
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
  );
};

FeaturedInner.propTypes = {
  className: PropTypes.string,
};

export default FeaturedInner;
