import PropTypes from "prop-types";
import "./BlogPostCard1.css";

const BlogPostCard1 = ({ className = "" }) => {
  return (
    <div className={`blog-post-card4 ${className}`}>
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
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
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
  );
};

BlogPostCard1.propTypes = {
  className: PropTypes.string,
};

export default BlogPostCard1;
