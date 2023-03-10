import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { MAIN_ID } from "../constants";
import { useEffect } from "react";

import board from "../images/board-cool-blue.jpg";
import fiber from "../images/blue-fiber.jpg";
import ryzen from "../images/ryzen-chip.jpg";

const Home = props => {
  const {
    handlePageTitle,
    pageTitle,
  } = props;

  useEffect(() => {
    handlePageTitle(pageTitle);
  }, [handlePageTitle, pageTitle]);

  return (
    <div className="continuum-global-wrapper--grid">
      <Header currentPage="home" />
      <div className="continuum-grid--two-column">
        <main className="continuum-global-main" id={MAIN_ID}>
          <h1>Home</h1>
          <a href="https://github.com/1Copenut/SPA-routing-experience">GitHub link to verify focus</a>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <h3>Market share</h3>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
          <h2>Divisions</h2>
          <p>Here&rsquo;s what we do!</p>
          <h2>Hardware</h2>
          <p>We provide next-generation firewalls. What does that mean? It means we will deliver boxes to you. Real cardboard boxes with real plastic and wires and silicon chips. These firewalls are the best way to secure your SOHO network.</p>
          <h2>Bulk IT purchases</h2>
          <p>We warehouse IT supplies. Lots of them! Central processing units, mother boards, high-resolution monitors, mice, keyboards, even mosue pads. We can serve your needs and ship you real cardboard boxes within 48 hours!</p>
          <h2>Last-mile Internet service</h2>
          <p>Sometimes you just need high-speed Internet. Streaming, gaming, Fortnite, video calls! You need more speed and less latency. We can deliver and won&rsquo;t have to run any noisy equipment that disturbs your dog&rsquo;s nap.</p>
        </main>

        <aside className="continuum-global-aside">
          <h3>Services</h3>
          AnyCorp&reg; offers a number of services including custom hardware builds, CPU orders in bulk, and last-mile fiber to the home or business.
          <h4>Hardware</h4>
          <img className="continuum-image" src={board} width="100%" height="200px" />
          <h4>Bulk IT purchases</h4>
          <img className="continuum-image" src={ryzen} width="100%" height="200px" alt="We recommend AMD Ryzen chips for our custom builds" />
          <h4>Last-mile Internet service</h4>
          <img className="continuum-image" src={fiber} width="100%" height="200px" alt="We offer high-speed fiber to the home" />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
