import PropTypes from "prop-types";
import "./BlogPostCard.css";

const BlogPostCard = ({ className = "" }) => {
  return (
    <div className={`blog-post-card ${className}`}>
      <img className="image-icon" loading="lazy" alt="" src="/image@2x.png" />
      <div className="content4">
        <div className="heading-and-text">
          <div className="author">Sunday , 1 Jan 2023</div>
          <div className="heading-and-icon">
            <h2 className="heading2">UX review presentations</h2>
            <input className="icon-wrap" type="checkbox" />
          </div>
          <div className="supporting-text1">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
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
  );
};

BlogPostCard.propTypes = {
  className: PropTypes.string,
};

export default BlogPostCard;
