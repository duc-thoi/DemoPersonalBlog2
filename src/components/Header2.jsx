import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <header className={`header ${className}`}>
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
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
