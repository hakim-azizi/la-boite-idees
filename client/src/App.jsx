import { Outlet } from "react-router-dom";
import { UserConnectionProvider } from "./contexts/UserConnectionProvider";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <UserConnectionProvider>
      <Header />
      <Outlet />
    </UserConnectionProvider>
  );
}

export default App;
