import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReferPage from "./Pages/ReferPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReferPage />} />
      </Routes>
    </Router>
  );
};

export default App;
