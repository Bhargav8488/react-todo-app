import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultsPage from "./pages/ResultsPage";
import AddTaskPage from "./pages/AddTaskPage";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={ResultsPage} />
          <Route exact path="/add-todo" Component={AddTaskPage} />
          <Route exact path="/update-todo/:id" Component={AddTaskPage} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
