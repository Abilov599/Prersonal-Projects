import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./layouts/header";

function App() {
  // const SHORTER_API = `https://api.shrtco.de/v2/shorten?url=${link}`;
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
