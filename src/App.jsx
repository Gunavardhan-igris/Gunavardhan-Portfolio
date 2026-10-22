import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";

import "./styles/Global.css";

function App() {
  return (
    <>
      <Loader />
      <Navbar />

      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
