import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`section-container ${className}`}>
      <div className="section7">
        <div className="container20">
          <div className="content45">
            <div className="blog-post-card20">
              <img
                className="image-icon27"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="content46">
                <div className="heading-and-text28">
                  <div className="author18">Olivia Rhye • 1 Jan 2023</div>
                  <div className="heading-and-icon10">
                    <h2 className="heading36">
                      Grid system for better Design User Interface
                    </h2>
                    <div className="icon-wrap10">
                      <img
                        className="arrow-up-right-icon1"
                        loading="lazy"
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div className="supporting-text56">
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
                  </div>
                </div>
                <div className="categories20">
                  <div className="badge52">
                    <div className="badge-base52">
                      <div className="text68">Design</div>
                    </div>
                  </div>
                  <div className="badge53">
                    <div className="badge-base53">
                      <div className="text69">Interface</div>
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

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
