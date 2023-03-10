import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { MAIN_ID } from "../constants";
import { useEffect } from "react";

const Pricing = props => {
  const {
    handlePageTitle,
    pageTitle,
  } = props;

  useEffect(() => {
    handlePageTitle(pageTitle);
  }, [handlePageTitle, pageTitle]);

  return (
    <div className="continuum-global-wrapper--grid">
      <Header currentPage="pricing" />

      <main className="continuum-global-main continuum-main--one-column" id={MAIN_ID}>
        <h1>Pricing</h1>
        <p>We do a lot of things. Here are the basic prices. Call for more details!</p>
        <table className="continuum-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Amount<br/>(in USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Next-generation firewalls</th>
              <td>Firewalls that employ machine learning and AI</td>
              <td>Hardware</td>
              <td>$3999</td>
            </tr>
            <tr>
              <th scope="row">Switches</th>
              <td>Unmanaged Level 2 and managed Level 3</td>
              <td>Hardware</td>
              <td>$1999</td>
            </tr>
            <tr>
              <th scope="row">Routers</th>
              <td>Smart routers with high-availability</td>
              <td>Hardware</td>
              <td>$2999</td>
            </tr>
            <tr>
              <th scope="row">Custom servers</th>
              <td>Servers built to your specifications</td>
              <td>Service</td>
              <td>$199</td>
            </tr>
            <tr>
              <th scope="row">Last-mile Internet</th>
              <td>Fiber to the home or business</td>
              <td>Service</td>
              <td>$599</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;
