import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Column from "../components/Column";
import FeaturedPosts from "../components/FeaturedPosts";
import "./BlogDetailBlog.css";

const BlogDetailBlog = () => {
  const navigate = useNavigate();

  const onYourNameTextClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <div className="blog-detail-blog">
      <header className="header1">
        <div className="navbar2">
          <a className="your-name2" onClick={onYourNameTextClick}>
            Your Name
          </a>
          <div className="menu6">
            <div className="blog2" onClick={onYourNameTextClick}>
              <a className="blog3">Blog</a>
            </div>
            <div className="projects4">
              <a className="blog3">Projects</a>
            </div>
            <div className="projects4">
              <a className="blog3">About</a>
            </div>
            <div className="projects4">
              <a className="newsletter4">Newsletter</a>
            </div>
            <div className="toggle-mode1">
              <img
                className="iconoutlinesun1"
                loading="lazy"
                alt=""
                src="/iconoutlinesun.svg"
              />
              <div
                className="iconoutlinemoon1"
                onClick={onIconoutlinemoonContainerClick}
              >
                <img
                  className="moon-icon1"
                  loading="lazy"
                  alt=""
                  src="/moon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container11">
          <b className="the-blog1">THE BLOG</b>
        </div>
      </header>
      <main className="main">
        <section className="content-wrapper">
          <Column />
          <FeaturedPosts />
        </section>
      </main>
      <footer className="footer4">
        <div className="container12">
          <a className="a1">© 2023</a>
          <div className="menu7">
            <a className="twitter4">{`Twitter `}</a>
            <a className="linkedin4">LinkedIn</a>
            <a
              className="email4"
              href="mailto:faqihsopyan@gmail.com"
              target="_blank"
            >
              Email
            </a>
            <a className="rss-feed4">RSS feed</a>
            <div className="add-to-feedly4">Add to Feedly</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailBlog;
