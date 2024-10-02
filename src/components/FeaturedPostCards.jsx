import PropTypes from "prop-types";
import "./FeaturedPostCards.css";

const FeaturedPostCards = ({
  className = "",
  theNewYorkTimesHref,
  theNewYorkTimes,
  supportingText,
  supportingText1,
  image,
}) => {
  return (
    <div className={`featured-post-cards ${className}`}>
      <div className="supporting-text21">
        {`Our first example is from `}
        <a
          className="the-new-york-times"
          href={theNewYorkTimesHref}
          target="_blank"
        >
          <span className="the-new-york">{theNewYorkTimes}</span>
        </a>
        . This screen utilizes a hierarchical grid to create a newspaper-like
        reading experience. At desktop screen size, two main columns make up the
        hierarchical grid. The most important news story takes up the most space
        in the grid, the left column, followed by secondary and tertiary
        stories, which take up the smaller column and modules on the right.
      </div>
      <img className="image-icon17" loading="lazy" alt="" src={image} />
      <div className="supporting-text-wrapper">
        <div className="supporting-text22">{supportingText}</div>
      </div>
      <b className="supporting-text23">{supportingText1}</b>
    </div>
  );
};

FeaturedPostCards.propTypes = {
  className: PropTypes.string,
  theNewYorkTimesHref: PropTypes.string.isRequired,
  theNewYorkTimes: PropTypes.string,
  supportingText: PropTypes.string,
  supportingText1: PropTypes.string,
  image: PropTypes.string,
};

export default FeaturedPostCards;
