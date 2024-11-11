import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import TemplatePreview from "./pages/TemplatePreview"
import "./index.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/preview/:templateId" element={<TemplatePreview />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
