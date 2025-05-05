import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DetailedProject from "./pages/DetailedProject";

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KC3RGBLM" });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/projetos/:id" element={<DetailedProject />} />
      </Routes>
    </Router>
  );
}

export default App;
