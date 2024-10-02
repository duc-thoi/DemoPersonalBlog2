import PropTypes from "prop-types";
import "./BlogPostCard2.css";

const BlogPostCard2 = ({ className = "" }) => {
  return (
    <div className={`blog-post-card4 ${className}`}>
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
  );
};

BlogPostCard2.propTypes = {
  className: PropTypes.string,
};

export default BlogPostCard2;
