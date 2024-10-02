import FeaturedPostCards from "./FeaturedPostCards";
import PropTypes from "prop-types";
import "./FeaturedPosts.css";

const FeaturedPosts = ({ className = "" }) => {
  return (
    <div className={`featured-posts ${className}`}>
      <div className="featured-post-cards1">
        <div className="author14">Sunday , 1 Jan 2023</div>
      </div>
      <div className="featured-post-cards2">
        <h1 className="heading30">
          Grid system for better Design User Interface
        </h1>
      </div>
      <div className="featured-image">
        <img
          className="image-icon18"
          loading="lazy"
          alt=""
          src="/image-121@2x.png"
        />
      </div>
      <div className="image-caption">
        <div className="supporting-text24">
          A grid system is a design tool used to arrange content on a webpage.
          It is a series of vertical and horizontal lines that create a matrix
          of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel
          across a website, and can help to make the layout more visually
          appealing and easier to navigate.
        </div>
        <div className="supporting-text24">
          If you’ve been to New York City and have walked the streets, it is
          easy to figure out how to get from one place to another because of the
          grid system that the city is built on. Just as the predictability of a
          city grid helps locals and tourists get around easily, so do webpage
          grids provide a structure that guides users and designers alike.
          Because of their consistent reference point, grids improve page
          readability and scannability and allow people to quickly get where
          they need to go.
        </div>
      </div>
      <div className="post-details">
        <div className="detail-excerpts">
          <b className="supporting-text26">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </b>
        </div>
        <img
          className="image-icon19"
          loading="lazy"
          alt=""
          src="/image-131@2x.png"
        />
        <div className="detail-excerpts">
          <div className="supporting-text26">
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </div>
        </div>
        <div className="supporting-text24">
          There are three common grid types used in websites and interfaces:
          column grid, modular grid, and hierarchical grid.
        </div>
        <div className="supporting-text24">
          Column grid involves dividing a page into vertical columns. UI
          elements and content are then aligned to these columns.
        </div>
        <div className="supporting-text24">
          Modular grid extends the column grid further by adding rows to it.
          This intersection of columns and rows make up modules to which
          elements and content are aligned. Modular grids are great for
          ecommerce and listing pages, as rows are repeatable to accommodate
          browsing.
        </div>
        <div className="supporting-text24">
          Hierarchical grid: Content is organized by importance using columns,
          rows, and modules. The most important elements and pieces of content
          take up the biggest pieces of the grid.
        </div>
        <b className="supporting-text32">Breaking Down the Grid</b>
        <div className="supporting-text24">
          Regardless of the type of grid you are using, the grid is made up of
          three elements: columns, gutters, and margins.
        </div>
        <div className="supporting-text24">
          <b>Columns:</b>
          <span className="span">{` `}</span>
          <span>
            Columns take up most of the real estate in a grid. Elements and
            content are placed in columns. To adapt to any screen size, column
            widths are generally defined with percentages rather than fixed
            values and the number of columns will vary. For example, a grid on a
            mobile device might have 4 columns and a grid on a desktop might
            have 12 columns.
          </span>
        </div>
      </div>
      <div className="post-details">
        <div className="supporting-text24">
          <b>Gutters:</b>
          <span>
            {" "}
            The gutter is the space between columns that separates elements and
            content from different columns. Gutter widths are fixed values but
            can change based on different breakpoints. For example, wider
            gutters are appropriate for larger screens, whereas smaller gutters
            are appropriate for smaller screens like mobile.
          </span>
        </div>
        <img
          className="image-icon20"
          loading="lazy"
          alt=""
          src="/image-14@2x.png"
        />
        <div className="card-excerpts">
          <div className="supporting-text36">
            Three elements make up any grid: (1) columns, (2) gutters, and (3)
            margins.
          </div>
        </div>
        <b className="supporting-text32">Examples of Grids in Use</b>
        <b className="supporting-text38">Example 1: Hierarchical Grid</b>
      </div>
      <FeaturedPostCards
        theNewYorkTimesHref="https://www.nytimes.com/"
        theNewYorkTimes="The New York Times"
        supportingText="The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Example 2: Column Grid"
        image="/image-15@2x.png"
      />
      <FeaturedPostCards
        theNewYorkTimesHref="https://ritual.com/"
        theNewYorkTimes="Ritual.com"
        supportingText="Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Example 3: Modular Grid"
        image="/image-16@2x.png"
      />
      <FeaturedPostCards
        theNewYorkTimesHref="https://www.behance.net/"
        theNewYorkTimes="Behance"
        supportingText="Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Example 4: Breaking the Grid"
        image="/image-17@2x.png"
      />
      <FeaturedPostCards
        theNewYorkTimesHref="https://material.io/design/material-studies/shrine.html#product-architecture"
        theNewYorkTimes="Shrine from Google’s Material Studies"
        supportingText="Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Benefits of the Grid"
        image="/image-18@2x.png"
      />
      <div className="post-details">
        <div className="supporting-text24">
          <p className="using-a-grid">
            Using a grid benefits both end users and the designers alike:
          </p>
          <ul className="designers-can-quickly-put-toge">
            <li className="users-can-easily-scan-predicta">
              Designers can quickly put together well-aligned interfaces.
            </li>
            <li className="users-can-easily-scan-predicta">
              Users can easily scan predictable grid-based interfaces.
            </li>
            <li>
              {`A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of `}
              <a
                className="responsive-web-design"
                href="https://www.nngroup.com/articles/responsive-web-design-definition/"
                target="_blank"
              >
                <span className="responsive-web-design1">
                  responsive web design
                </span>
              </a>
              . Responsive design uses breakpoints to determine the screen size
              threshold at which the layout should change. For example, a
              desktop screen may have 12 grid columns, which may be stacked on
              mobile so that the resulting layout has only 4 columns.
            </li>
          </ul>
        </div>
        <img
          className="image-icon20"
          loading="lazy"
          alt=""
          src="/image-19@2x.png"
        />
        <div className="detail-excerpts">
          <div className="supporting-text26">
            At the mobile size, Behance’s one-column grid (left) was reflowed
            into a four-column grid structure (right).
          </div>
        </div>
        <div className="supporting-text24">
          Even more importantly, the grid is not a throw-away concept. It is
          used by both designers and developers alike. Be sure to communicate
          with your developers the grid structure used when creating the design,
          so they can implement it accordingly.
        </div>
        <b className="supporting-text32">Choosing and Setting Up Your Grid</b>
      </div>
      <div className="post-details">
        <div className="supporting-text24">
          How you use and set up a grid is fundamental to creating well thought
          out layouts and experiences for your user.
        </div>
        <div className="supporting-text24">
          <b>{`Choose the right grid for your needs. `}</b>
          <span>
            Take time to think through what type of grid ­— column, modular, or
            hierarchical — best suits your needs. A hierarchical grid may be the
            best fit if one item on your page will always be more important than
            the surrounding elements. For example, hierarchical grids are great
            for online news platforms. If the content you need to display is
            highly variable, consider using a basic column or modular grid, as
            these provide lots of flexibility when designing. For example,
            elements and content can span across multiple columns or modules or
            just one to fit design needs.
          </span>
        </div>
        <div className="supporting-text24">
          <b>Spend time setting up your grid.</b>
          <span>
            {" "}
            Once you have figured out what type of grid will work well for your
            needs, start setting it up. Determine the number of columns and the
            margin and gutter sizes relative to your screen sizes. You will most
            likely want to prepare for mobile, tablet, and desktop screens. A
            12-column grid at laptop or desktop size is generally flexible
            enough for most design needs. The number of columns will decrease as
            your device size decreases. Wireframing tools like Sketch and Figma
            have quick and easy ways to set up and edit your grid, even after
            you have started designing.
          </span>
        </div>
        <img
          className="image-icon20"
          loading="lazy"
          alt=""
          src="/image-20@2x.png"
        />
        <div className="metadata-items">
          <div className="supporting-text46">
            Easily set the number of columns, the gutter size, and margin size
            in Figma.
          </div>
        </div>
        <div className="supporting-text24">
          <b>Always place content within columns, not gutters.</b>
          <span>
            {" "}
            The gutters should remain empty as you place elements on the grid in
            order to clearly separate and align content and elements.
          </span>
        </div>
        <img
          className="image-icon20"
          loading="lazy"
          alt=""
          src="/image-211@2x.png"
        />
        <div className="detail-excerpts">
          <div className="supporting-text26">
            Content or elements should be placed within and across columns, not
            gutters.
          </div>
        </div>
        <div className="supporting-text24">
          <b>Consider using an 8px grid system.</b>
          <span>
            {" "}
            For most common devices, the screen size in pixels is a multiple of
            8. Keeping grid-component values at a multiple of 8 will generally
            make it easier to scale and implement a grid.
          </span>
        </div>
        <b className="supporting-text32">Conclusion</b>
      </div>
      <div className="featured-post-cards5">
        <div className="supporting-text26">
          Grids not only provide designers a structure on which to base layouts,
          but they also improve readability and scannability for end users. Use
          a good grid system that easily adapts to various screen sizes.
        </div>
      </div>
      <div className="post-tags">
        <div className="categories16">
          <div className="badge43">
            <div className="badge-base43">
              <div className="badge-label">Design</div>
            </div>
          </div>
          <div className="badge44">
            <div className="badge-base44">
              <div className="text61">Interface</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content39">
        <div className="heading-and-supporting-text3">
          <div className="image-caption">
            <div className="subheading3">Newlatters</div>
            <h1 className="heading31">Stories and interviews</h1>
          </div>
          <div className="supporting-text52">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </div>
        </div>
        <div className="email-capture3">
          <div className="input-field3">
            <div className="input-field-base3">
              <div className="input-with-label3">
                <div className="label3">Email</div>
                <div className="input6">
                  <input
                    className="content40"
                    placeholder="Enter your email"
                    type="text"
                  />
                  <img className="help-icon4" alt="" src="/help-icon.svg" />
                </div>
              </div>
              <div className="hint-text3">
                {`We care about your data in our `}
                <span className="responsive-web-design1">privacy policy</span>
              </div>
            </div>
          </div>
          <button className="button10">
            <div className="button-base5">
              <div className="button-label">Subscribe</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FeaturedPosts.propTypes = {
  className: PropTypes.string,
};

export default FeaturedPosts;
