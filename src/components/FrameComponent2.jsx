import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={`section-wrapper ${className}`}>
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
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
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
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
