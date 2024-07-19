import { NavLink } from "react-router-dom";

import "../../style/user.css";

function HomeUser() {
  return (
    <>
      <header>
        <h1>BIENVENUE DANS VOTRE PANNEAU D&apos;ADMINISTRATION</h1>
      </header>
      <main>
        <section className="user">
          <article>
            <p>A partir ce panneau vous pourrez</p>
            <ol>
              <li>
                <NavLink to="add-good-idea">ajouter une bonne idées</NavLink>
              </li>
              <li>
                <NavLink to="update-good-idea">
                  Modifier ou supprimer une bonne idées
                </NavLink>
              </li>
            </ol>
            <ol>
              <li>
                <NavLink to="add-bad-idea">ajouter une mauvaise idées</NavLink>
              </li>
              <li>
                <NavLink to="update-bad-idea">
                  Modifier ou supprimer une mauvaise idées
                </NavLink>
              </li>
            </ol>
            <ol>
              <li>
                <NavLink to="add-user">Ajouter un membre</NavLink>
              </li>
              <li>
                <NavLink to="update-user">
                  Modifier ou supprimer un membre
                </NavLink>
              </li>
            </ol>
            <ol>
              <li>
                <NavLink to="update-status-user">
                  Modifier le status d'un membre pour le faire passser
                  administrateur
                </NavLink>
              </li>
            </ol>
          </article>
        </section>
      </main>
    </>
  );
}
export default HomeUser;
