import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import AllProjects from "./pages/allProjects/AllProjects";

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KC3RGBLM" });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
