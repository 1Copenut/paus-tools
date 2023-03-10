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
        <p>Hints for AnyCorp&reg; accessibility issues. <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG)</a> violations have a link to the relevant success criteria if you want to learn more. Best practices do not include a link but are encouraged because they improve the user experience.</p>
        <h2>Issues</h2>
        <h3>Global footer</h3>
        <ul>
          <li><strong>Color contrast:</strong> link color contrast is below 4.5:1 <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">SC 1.4.3</a></li>
          <li><strong>Color contrast:</strong> links are identified by color only <a href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html">SC 1.4.1</a></li>
          <li><strong>Cognition:</strong> &ldquo;Click here&rdquo; text is not unique or descriptive <a href="https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html">SC 2.4.4</a></li>
          <li><strong>Discernible text:</strong> a11y icon has no text for screen readers <a href="https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html">SC 2.4.4</a></li>
        </ul>
        <h3>Home page</h3>
        <ul>
          <li><strong>Alt text:</strong> Descriptive, required images must have alt text <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">SC 1.1.1</a></li>
          <li><strong>Cognition:</strong> SOHO acronym should be spelled out as &ldquo;Small Office Home Office&rdquo; <a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html">SC 1.3.1</a></li>
          <li><strong>Heading levels:</strong> improper nesting level. Goes from H1 to H3, then back to H2.</li>
          <li><strong>Performance budget:</strong> resize images and scripts to limit bytes over the wire</li>
        </ul>
        <h3>Pricing</h3>
        <ul>
          <li><strong>Zoom:</strong> layout requires scrolling in two directions at 400% zoom <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html">SC 1.4.10</a></li>
        </ul>
        <h3>WCAG 2.2</h3>
        <ul>
          <li><strong>Focus styles:</strong> Ensure links&rsquo; focus appearance follows <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#2411-focus-appearance-aa">SC 2.4.7</a></li>
          <li><strong>Focus obscured:</strong>Ensure links&rsquo; focus style is not obscured <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#2412-focus-not-obscured-minimum-aa">SC 2.4.12</a></li>
        </ul>
        <hr />
        <h2>Photo credits</h2>
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
