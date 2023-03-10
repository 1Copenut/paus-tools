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
        <p>Hints for all the accessibility issues. Violations are linked to the Web Content Accessibility Guidelines (WCAG) guidance whenever possible.</p>
        <h2>Issues</h2>
        <h3>Global footer</h3>
        <ul>
          <li><strong>Color contrast:</strong> link color contrast is below 4.5:1</li>
          <li><strong>Color contrast:</strong> links are identified by color only</li>
          <li><strong>Cognition:</strong> link text is not unique or descriptive</li>
          <li><strong>Discernible text:</strong> a11y icon has no text for screen readers</li>
        </ul>
        <h3>Home page</h3>
        <ul>
          <li><strong>Heading levels:</strong> improper nesting level. Goes from H1 to H3, then back to H2.</li>
          <li><strong>Alt text:</strong> Descriptive, required images must have alt text</li>
          <li><strong>Cognition:</strong> SOHO acronym should be spelled out as &ldquo;Small Office Home Office&rdquo;</li>
          <li><strong>Performance budget:</strong> resize images and other large payloads to limit bytes over the wire</li>
        </ul>
        <h3>Pricing</h3>
        <ul>
          <li><strong>Zoom:</strong> layout requires scrolling in two directions at 400% zoom</li>
        </ul>
        <hr />
        <h2>Credits</h2>
        <ul>
          <li>Cool blue board photo by <a href="https://unsplash.com/es/@floriankrumm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Florian Krumm</a> on <a href="https://unsplash.com/photos/yLDabpoCL3s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </li>
          <li>Blue fiber photo by <a href="https://unsplash.com/@comparefibre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Compare Fibre</a> on <a href="https://unsplash.com/photos/INNsF0Zz_kQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </li>
          <li>Ryzen chip photo by <a href="https://unsplash.com/@nsx_2000?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Krzysztof Hepner</a> on <a href="https://unsplash.com/photos/EkXSNquusLk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
  
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Hints;
