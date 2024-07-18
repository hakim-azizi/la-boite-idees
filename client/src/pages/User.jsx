import { NavLink, Outlet } from "react-router-dom";
import { UserConnectionProvider } from "../contexts/UserConnectionProvider";

function User() {
  const pseudonym = localStorage.getItem("pseudonym");

  return (
    <UserConnectionProvider>
      {pseudonym === null ? (
        <h1>ERROR 401 FORDIBEN</h1>
      ) : (
        <>Bonjour {pseudonym}
          <p className="link-panel">
            <NavLink to="./">Revenir au panneau d'administration</NavLink>
          </p>
          <Outlet />
        </>
      )}
    </UserConnectionProvider>
  );
}
export default User;