import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./state/store";
import { Provider as ReduxProvider } from "react-redux";
import Home from "./pages/Home/index";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
