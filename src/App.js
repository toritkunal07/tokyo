import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";

const getRoute = () => {
  switch (window.location.pathname) {
    case "/about":
      return <About />;
    case "/portfolio":
      return <Portfolio />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
};
function App() {
  return (
    <div className="tokyo_tm_all_wrap">
      <Sidebar />
      {getRoute()}
    </div>
  );
}

export default App;
