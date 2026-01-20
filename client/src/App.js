import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppEditExt from "./AppEditExt";
import AppContentEditable from "./AppContentEditable";
import AppEditable from "./AppEditable";
import AppEditExtExamples from "./AppEditExtExamples";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">content editable</Link> |{" "}
        <Link to="/editext">editext</Link> |{" "}
        <Link to="/editable">własny przykład</Link> |{" "}
        <Link to="/editextexample">editext przykłady</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AppContentEditable />} />
        <Route path="/editext" element={<AppEditExt />} />
        <Route path="/editable" element={<AppEditable />} />
        <Route path="/editextexample" element={<AppEditExtExamples />} />
      </Routes>
    </Router>
  );
}

export default App;