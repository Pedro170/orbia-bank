import { BrowserRouter, HashRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext";
import "./styles/index.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <HashRouter>
      <DataContextProvider>
      <AppRoutes />
      </DataContextProvider>
    </HashRouter>
  );
}

export default App;
