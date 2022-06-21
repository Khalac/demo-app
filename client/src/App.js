import { Route, Routes,Link } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage.js";
import Home from "./components/Home/home";
import { Navigate } from "react-router-dom";
import ShowUser from "./components/ShowUser/ShowUser.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<ShowUser />} />
    </Routes>
  );
}

export default App;
