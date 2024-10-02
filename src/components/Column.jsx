import BlogPostCard from "./BlogPostCard";
import BlogPostCard4 from "./BlogPostCard4";
import BlogPostCard2 from "./BlogPostCard2";
import BlogPostCard3 from "./BlogPostCard3";
import PropTypes from "prop-types";
import "./Column.css";

const Column = ({ className = "" }) => {
  return (
    <div className={`column1 ${className}`}>
      <h3 className="heading26">Recent blog posts</h3>
      <BlogPostCard
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image3@2x.png"
        propHeight="204px"
        propFlex1="1"
        propFlex2="1"
        propFlex3="unset"
        propMinWidth2="unset"
        text="Research"
        propMinWidth3="69px"
        text1="Presentation"
      />
      <div className="blog-post-card14">
        <img
          className="image-icon14"
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
        <div className="blog-post-card14">
          <div className="heading-and-text17">
            <div className="author11">Sunday , 1 Jan 2023</div>
            <div className="heading-and-text18">
              <div className="heading27">Migrating to Linear 101</div>
              <div className="supporting-text18">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get...
              </div>
            </div>
          </div>
          <div className="categories13">
            <div className="badge37">
              <div className="badge-base37">
                <div className="text55">Design</div>
              </div>
            </div>
            <div className="badge38">
              <div className="badge-base38">
                <div className="text56">Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post-card14">
        <img
          className="image-icon14"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
        <div className="blog-post-card14">
          <div className="heading-and-text17">
            <div className="author11">Sunday , 1 Jan 2023</div>
            <div className="heading-and-text18">
              <div className="heading27">Building your API Stack</div>
              <div className="supporting-text18">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </div>
            </div>
          </div>
          <div className="categories14">
            <div className="badge37">
              <div className="badge-base39">
                <div className="text55">Design</div>
              </div>
            </div>
            <div className="badge38">
              <div className="badge-base38">
                <div className="text56">Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogPostCard4 image="/image4@2x.png" />
      <BlogPostCard2
        propAlignSelf="stretch"
        image="/image-41@2x.png"
        propFlex="unset"
        propMinWidth1="unset"
        propBackgroundColor="#f0f9ff"
        text="Product"
        propColor="#026aa2"
        propBackgroundColor1="#eef4ff"
        text1="Research"
        propColor1="#3538cd"
        propDisplay="inline-block"
        propMinWidth2="64px"
        propFlex1="1"
        propMinWidth3="67px"
        propBackgroundColor2="#fff6ed"
        text2="Frameworks"
        propColor2="#c4320a"
      />
      <BlogPostCard
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image-52@2x.png"
        propHeight="240px"
        propFlex1="1"
        propFlex2="1"
        propFlex3="unset"
        propMinWidth2="unset"
        text="Research"
        propMinWidth3="69px"
        text1="Presentation"
      />
      <BlogPostCard
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image-62@2x.png"
        propHeight="240px"
        propFlex1="1"
        propFlex2="1"
        propFlex3="unset"
        propMinWidth2="unset"
        text="Research"
        propMinWidth3="69px"
        text1="Presentation"
      />
      <BlogPostCard2
        propAlignSelf="stretch"
        image="/image-71@2x.png"
        propFlex="1"
        propMinWidth1="113px"
        propBackgroundColor="#ecfdf3"
        text="Software Development"
        propColor="#037a48"
        propBackgroundColor1="#fdf2fa"
        text1="Tools"
        propColor1="#c11574"
        propDisplay="unset"
        propMinWidth2="unset"
        propFlex1="unset"
        propMinWidth3="unset"
        propBackgroundColor2="#fff1f3"
        text2="SaaS"
        propColor2="#c11048"
      />
      <BlogPostCard3
        propAlignSelf="stretch"
        image="/image-81@2x.png"
        propDisplay="inline-block"
        propMinWidth1="127px"
      />
      <div className="blog-post-card14">
        <img
          className="image-icon14"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
        <div className="blog-post-card14">
          <div className="heading-and-text17">
            <div className="author11">Sunday , 1 Jan 2023</div>
            <div className="heading-and-text18">
              <div className="heading27">Building your API Stack</div>
              <div className="supporting-text18">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </div>
            </div>
          </div>
          <div className="categories14">
            <div className="badge37">
              <div className="badge-base39">
                <div className="text55">Design</div>
              </div>
            </div>
            <div className="badge38">
              <div className="badge-base38">
                <div className="text56">Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogPostCard4 image="/image4@2x.png" />
      <BlogPostCard2
        propAlignSelf="stretch"
        image="/image-41@2x.png"
        propFlex="unset"
        propMinWidth1="unset"
        propBackgroundColor="#f0f9ff"
        text="Product"
        propColor="#026aa2"
        propBackgroundColor1="#eef4ff"
        text1="Research"
        propColor1="#3538cd"
        propDisplay="inline-block"
        propMinWidth2="64px"
        propFlex1="1"
        propMinWidth3="67px"
        propBackgroundColor2="#fff6ed"
        text2="Frameworks"
        propColor2="#c4320a"
      />
    </div>
  );
};

Column.propTypes = {
  className: PropTypes.string,
};

export default Column;
