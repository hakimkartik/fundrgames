import "bootstrap/dist/css/bootstrap.css";
import "../CSS/index.css";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
