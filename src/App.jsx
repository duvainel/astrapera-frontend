import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { Provider as ReduxProvider } from "react-redux";
import { Navbar } from "./components";
import { AppRoutes } from "./routes";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
