import Header from "./Components/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
