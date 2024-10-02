import PropTypes from "prop-types";
import "./BlogPostCard3.css";

const BlogPostCard3 = ({ className = "" }) => {
  return (
    <div className={`blog-post-card4 ${className}`}>
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
            Starting a community doesn’t need to be complicated, but how do you
            get started?
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
  );
};

BlogPostCard3.propTypes = {
  className: PropTypes.string,
};

export default BlogPostCard3;
