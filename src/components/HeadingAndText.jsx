import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeadingAndText.css";

const HeadingAndText = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHeadingAndIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`heading-and-text ${className}`}>
      <div className="author">Sunday , 1 Jan 2023</div>
      <div className="heading-and-icon1" onClick={onHeadingAndIconClick}>
        <h2 className="heading5">
          Grid system for better Design User Interface
        </h2>
        <input className="icon-wrap" type="checkbox" />
      </div>
      <div className="supporting-text1">
        A grid system is a design tool used to arrange content on a webpage. It
        is a series of vertical and horizontal lines that create a matrix of
        intersecting points, which can be used to align and organize page
        elements. Grid systems are used to create a consistent look and feel
        across a website, and can help to make the layout more visually
        appealing and easier to navigate.
      </div>
    </div>
  );
};

HeadingAndText.propTypes = {
  className: PropTypes.string,
};

export default HeadingAndText;
