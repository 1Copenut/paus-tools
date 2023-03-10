import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { MAIN_ID } from "../constants";
import { useEffect } from "react";

const Hints = props => {
  const {
    handlePageTitle,
    pageTitle,
  } = props;

  useEffect(() => {
    handlePageTitle(pageTitle);
  }, [handlePageTitle, pageTitle]);

  return (
    <div className="continuum-global-wrapper--grid">
      <Header currentPage="hints" />

      <main className="continuum-global-main continuum-main--one-column" id={MAIN_ID}>
        <h1>Hints</h1>
        <p>Hints for all the accessibility issues</p>
        <h2>Global</h2>
        <ul>
          <li><strong>Footer:</strong> link color contrast is below 4.5:1</li>
          <li><strong>Footer:</strong> links are identified by color only</li>
          <li><strong>Footer:</strong> link text is not unique or descriptive</li>
        </ul>
        <h2>Home page</h2>
        <ul>
          <li><strong>Headings:</strong> improper nesting level, H1 > H3, then back to H2</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Hints;
