import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";

import MyContainer from "./Components/MyContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsSearchCard from "./Components/DetailsSearchCard";
function App() {
  return (
    <div id="app" className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<MyContainer />} />
          <Route path="Specific/:meteo" element={<DetailsSearchCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
