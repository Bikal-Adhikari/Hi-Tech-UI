import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing page/Landing";
import ErrorPage from "./pages/error page/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
