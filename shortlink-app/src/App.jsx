import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Main from "./layouts/main";

function App() {
  // const SHORTER_API = `https://api.shrtco.de/v2/shorten?url=${link}`;
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
