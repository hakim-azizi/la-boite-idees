import { useRef, useState } from "react";
import PropTypes from "prop-types";

import FormDelete from "./FormDelete";

function FormUpdateUser({ value, setMessageRequest }) {
  // Référence pour le champ email
  const emailRef = useRef();
  // Référence pour le champ firstname
  const pseudonymRef = useRef();

  //  États pour l'affichage de l&apos;erreur
  const [responseValue, setResponseValue] = useState("");

  // Messsage d'erreur
  const errorMessage =
    "Une erreur s'est produite. Veuillez réessayer plus tard.";

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour modifier un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/update/${value.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pseudonym: pseudonymRef.current.value,
            email: emailRef.current.value,
          }),
        }
      );
      const res = await response.json();

      // Redirection vers la page de connexion si la création réussit
      if (response.status !== 201) {
        const contentType = response.headers.get("content-type");
        setResponseValue(errorMessage);

        if (contentType && contentType.includes("application/json")) {
          console.info("Détails de la réponse :", res);
        }
      }
    } catch (err) {
      console.error(err);
      setResponseValue(errorMessage);
    }
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Champ pour le nom */}
          <label htmlFor="pseudonym">{}</label>
          <input
            ref={pseudonymRef}
            type="text"
            id="pseudonym"
            name="pseudonym"
            placeholder={value.pseudonym}
          />
        </div>

        <div>
          {/* Champ pour l'email */}
          <label htmlFor="email">{}</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder={value.email}
          />
        </div>
        {/* Bouton de soumission du formulaire */}
        <button className="button-form" type="submit">
          S&apos;inscrire le membre
        </button>
        {responseValue && <p className="errormessage">{responseValue}</p>}
      </form>
      <FormDelete
        item="user"
        id={value.id}
        setMessageRequest={setMessageRequest}
      />
    </article>
  );
}

export default FormUpdateUser;
FormUpdateUser.propTypes = {
  setMessageRequest: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      pseudonym: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
