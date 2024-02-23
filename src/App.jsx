import "./App.module.scss";
import Content from "./components/content/content.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Content/>
      </main>
    </>
  );
}

export default App;
