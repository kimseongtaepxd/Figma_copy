import "./App.css";
import Header from "./component/Header.js";
import Top from "./component/Top.js";
import Info from "./component/Info.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Info />
      </main>
    </>
  );
}

export default App;
