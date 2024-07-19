import { Outlet } from "react-router-dom";
import { UserConnectionProvider } from "./contexts/UserConnectionProvider";
import Header from "./components/Header";
import "./App.css";

function App() {
  const pseudonym = localStorage.getItem("pseudonym");
  return (
    <UserConnectionProvider>
      <Header />
      <p className="welcom">Bonjour {pseudonym}</p>
      <Outlet />
    </UserConnectionProvider>
  );
}

export default App;
