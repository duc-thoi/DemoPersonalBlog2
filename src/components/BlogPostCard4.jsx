import PropTypes from "prop-types";
import "./BlogPostCard4.css";

const BlogPostCard4 = ({ className = "", image }) => {
  return (
    <div className={`blog-post-card13 ${className}`}>
      <img className="image-icon13" rows={12} cols={17} alt="" src={image} />
      <div className="content35">
        <div className="heading-and-text16">
          <div className="author10">Sunday , 1 Jan 2023</div>
          <div className="heading-and-icon8">
            <h3 className="heading25">Bill Walsh leadership lessons</h3>
            <input className="icon-wrap8" type="checkbox" />
          </div>
          <div className="supporting-text17">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </div>
        </div>
        <div className="categories12">
          <div className="badge34">
            <div className="badge-base34">
              <div className="text52">Leadership</div>
            </div>
          </div>
          <div className="badge35">
            <div className="badge-base35">
              <div className="text52">Management</div>
            </div>
          </div>
          <div className="badge36">
            <div className="badge-base36">
              <div className="text52">Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCard4.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BlogPostCard4;
