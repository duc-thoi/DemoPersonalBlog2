import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ className = "" }) => {
  return (
    <div className={`pagination ${className}`}>
      <div className="previous-button-wrapper">
        <div className="button5">
          <div className="button-base1">
            <img
              className="arrow-left-icon"
              loading="lazy"
              alt=""
              src="/arrowleft.svg"
            />
            <div className="text29">Previous</div>
          </div>
        </div>
      </div>
      <div className="pagination-numbers">
        <div className="pagination-number-base">
          <div className="content16">
            <div className="number">1</div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content17">
            <div className="number">2</div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content18">
            <div className="number">3</div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content19">
            <div className="number">...</div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content17">
            <div className="number">8</div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content17">
            <div className="number">9</div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content22">
            <div className="number">10</div>
          </div>
        </div>
      </div>
      <div className="previous-button-wrapper">
        <div className="button5">
          <div className="button-base1">
            <div className="text30">Next</div>
            <img
              className="arrow-left-icon"
              loading="lazy"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
