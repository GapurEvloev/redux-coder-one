import "./App.css";
import { HomePage } from "./containers/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./containers/NotFound/NotFound";
import { UserPage } from "./containers/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/user/*" element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
