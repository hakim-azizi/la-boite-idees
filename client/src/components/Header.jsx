import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { UserConnectionContext } from "../contexts/UserConnectionProvider";

import "../style/header.css";

function Header() {
  const { disconnect } = useContext(UserConnectionContext);
  const [value, setValue] = useState(0);
  const open = () => {
    if (value === 0) {
      setValue(1);
      document.querySelector(".open-menu").style.display = "block";
    } else {
      setValue(0);
      document.querySelector(".open-menu").style.display = "none";
    }
  };
  const pseudonym = localStorage.getItem("pseudonym");
  return (
    <header className="menu">
      <nav>
        <p>
          <NavLink to="/">La boite à idées</NavLink>
        </p>
        <button type="button" onClick={open}>
          <img src="../images/menu-burger.png" alt="Ouverture du menu" />
        </button>
        <ul className="open-menu">
          <li>
            <NavLink to="../idea">Idées</NavLink>
          </li>
          <li>
            <NavLink to="../good-idea">Bonnes idées</NavLink>
          </li>
          <li>
            <NavLink to="../bad-idea">Mauvaises idées</NavLink>
          </li>
          {pseudonym === null ? (
            <>
              <li>
                <NavLink to="../login">Connexion</NavLink>
              </li>
              <li>
                <NavLink to="../register">Inscription</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="../login" onClick={disconnect}>
                  Déconnexion
                </NavLink>
              </li>
              <li>
                <NavLink to="user">Menu utilisateur</NavLink>
              </li>
              <li>
                <NavLink to="user/add-good-idea">
                  Ajouter une bonne idée
                </NavLink>
              </li>
              <li>
                <NavLink to="user/update-good-idea">
                  Modifier ou supprimer une bonne idée
                </NavLink>
              </li>
              <li>
                <NavLink to="user/add-bad-idea">
                  Ajouter une Mauvaises idée
                </NavLink>
              </li>
              <li>
                <NavLink to="user/update-bad-idea">
                  Modifier ou supprimer une Mauvaises idée
                </NavLink>
              </li>
              <li>
                <NavLink to="user/add-user">Ajouter un utilisateur</NavLink>
              </li>
              <li>
                <NavLink to="user/update-user">
                  Modifier ou supprimer utilisateur
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
