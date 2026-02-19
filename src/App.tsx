import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext";
import "./Style.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
      <AppRoutes />
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
