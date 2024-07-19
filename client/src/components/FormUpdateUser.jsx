import { useRef, useState } from "react";
import PropTypes from "prop-types";

import FormDelete from "./FormDelete";

function FormUpdateUser({ value, setMessageRequest }) {
  // Référence pour le champ email
  const emailRef = useRef();
  // Référence pour le champ firstname
  const pseudonymRef = useRef();

  // États pour le mot de passe et la confirmation du mot de passe
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //  États pour l'affichage de l&apos;erreur
  const [responseValue, setResponseValue] = useState("");

  // Messsage d'erreur
  const errorMessage =
    "Une erreur s'est produite. Veuillez réessayer plus tard.";

  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Gestionnaire de changement de la confirmation du mot de passe
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

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
            password,
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
  const redColorPassword = password.length >= 8 ? "" : "errormessage";
  let confirmPasswordChange = "errormessage";

  if (password === confirmPassword && confirmPassword.length > 0) {
    confirmPasswordChange = "";
  }
  // "✅" : "❌"
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
        <div>
          {/* Champ pour le mot de passe */}
          <label htmlFor="password">{}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Mot de passe"
            className={redColorPassword}
          />
        </div>
        {/* Indicateur de force du mot de passe */}
        <p>{}</p>
        <div>
          {/* Champ pour la confirmation du mot de passe */}
          <label htmlFor="confirm-password">{}</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirmation du mot de passe"
            className={confirmPasswordChange}
          />
        </div>
        {/* Indicateur de correspondance avec le mot de passe */}
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
      /></article>
    
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
