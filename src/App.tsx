import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Footer from "./components/Footer";
import NavBar from "./components/NavbBar";
import Faq from "./pages/Faq";
// import SinglePost from "./pages/SinglePost"; // Import the SinglePost component

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SinglePost />} />{" "}
          {/* Add dynamic route for single blog post */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
