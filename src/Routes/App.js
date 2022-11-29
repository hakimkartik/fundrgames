import "bootstrap/dist/css/bootstrap.css";
import "../CSS/index.css";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
