import { NavLink, useRevalidator } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { UserConnectionContext } from "../contexts/UserConnectionProvider";
import "../style/header.css";

function Header() {
  const { disconnect } = useContext(UserConnectionContext);
  const [value, setValue] = useState(1);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const revalidator = useRevalidator();

  const [pseudonym, setPseudonym] = useState(localStorage.getItem("pseudonym"));

  const measureHeight = () => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    revalidator.revalidate();
    // Measure height whenever the content of the menu changes
    measureHeight();
  }, [pseudonym]);
  const open = () => {
    const menu = document.querySelector(".open-menu");
    if (value === 1) {
      setValue(0);
      menu.style.visibility = "visible";
      menu.style.height = `${height}px`;
    } else {
      setValue(1);
      menu.style.height = "0px";
      setTimeout(() => {
        menu.style.visibility = "hidden";
      }, 300); // Durée de l'animation de fermeture
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setPseudonym(null);
  };
  return (
    <>
      <header className="menu">
        <nav>
          <p>
            <NavLink to="/">La boite à idées</NavLink>
          </p>
          <button type="button" onClick={open}>
            <img src="../images/menu-burger.png" alt="Ouverture du menu" />
          </button>
          <ul
            className="open-menu"
            ref={containerRef}
            style={{
              height: "0px",
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
          >
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
                  <NavLink to="../login" onClick={handleDisconnect}>
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
      <p className="welcom">Bonjour {pseudonym && pseudonym}</p>
    </>
  );
}
export default Header;
