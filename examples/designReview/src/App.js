import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Pricing from "./routes/Pricing";
import Hints from "./routes/Hints";
import Template from "./routes/Template";

const App = () => {
  const [currentPageTitle, setCurrentPageTitle] = useState("");

  const handlePageTitle = (title) => {
    setCurrentPageTitle(title);
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Template pageTitle={currentPageTitle} />}>
          <Route
            index
            element={
              <Home
                pageTitle="We Say So Homepage"
                handlePageTitle={handlePageTitle}
              />
            }
          />
          <Route
            path="services"
            element={
              <Services
                pageTitle="We Say So Services"
                handlePageTitle={handlePageTitle}
              />
            }
          />
          <Route
            path="pricing"
            element={
              <Pricing
                pageTitle="We Say So Pricing"
                handlePageTitle={handlePageTitle}
              />
            }
          />
          <Route
            path="hints"
            element={
              <Hints
                pageTitle="We Say So Accessibility Hints"
                handlePageTitle={handlePageTitle}
              />
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
