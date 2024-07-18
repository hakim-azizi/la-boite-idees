import { NavLink } from "react-router-dom";
import "../style/header.css";

function Header() {
  return (
    <header>
      <nav>
        <p>
          <NavLink to="/">La boite à idées</NavLink>
        </p>
        <figure>
          <img src="../images/menu-burger.png" alt="Ouverture du menu" />
        </figure>
        <ul>
          <li>
            <NavLink to="../idea">Idées</NavLink>
          </li>
          <li>
            <NavLink to="../good-idea">Bonnes idées</NavLink>
          </li>
          <li>
            <NavLink to="../bad-idea">Mauvaises idées</NavLink>
          </li>
          <li>
            <NavLink to="../login">Connexion</NavLink>
          </li>
          <li>
            <NavLink to="../register">Inscription</NavLink>
          </li>

          <li>
            <NavLink to="user">Menu utilisateur</NavLink>
          </li>

          <li>
            <NavLink to="user/add-good-idea">Ajouter une bonne idée</NavLink>
          </li>
          <li>
            <NavLink to="user/update-good-idea">
              Modifier ou supprimer une bonne idée
            </NavLink>
          </li>

          <li>
            <NavLink to="user/add-bad-idea">
              Modifier ou supprimer une Mauvaises idée
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
        </ul>
      </nav>
    </header>
  );
}
export default Header;
