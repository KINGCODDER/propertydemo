// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Rent from "./Components/Rent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterBox from "./Components/FilterBox";

function App() {
  return (
    <>
      <Navbar />
      <FilterBox />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Rent />}></Route>
        </Routes>
      </Router> */}
      {/* <Card /> */}
    </>
  );
}

export default App;
