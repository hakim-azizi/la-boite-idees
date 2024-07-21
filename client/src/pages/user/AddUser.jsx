import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  // Référence pour le champ email
  const emailRef = useRef();
  // Référence pour le champ firstname
  const pseudonymRef = useRef();

  // États pour le mot de passe et la confirmation du mot de passe
  const [password, setPassword] = useState("");

  //  États pour l'affichage de l&apos;erreur
  const [responsevalue, setResponsevalue] = useState("");

  // Messsage d'erreur
  const errorMessage =
    "Une erreur s'est produite. Veuillez réessayer plus tard.";

  // Hook pour la navigation
  const navigate = useNavigate();

  const generatePassword = () => {
    const characters =
      "azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN&|@#§!_-€*$%£µ?:+=°";
    let pass = "";
    for (let i; pass.length < 16; i += i) {
      const randCharacters = Math.round(Math.random() * characters.length);
      pass += characters.substring(randCharacters, randCharacters + 1);
    }

    setPassword(pass);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    generatePassword();
    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
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
      if (response.status === 201) {
        navigate("/admin");
      } else {
        const contentType = response.headers.get("content-type");
        setResponsevalue(errorMessage);

        if (contentType && contentType.includes("application/json")) {
          console.info("Détails de la réponse :", res);
        }
      }
    } catch (err) {
      console.error(err);
      setResponsevalue(errorMessage);
    }
  };
  return (
    <>
      <header>
        <h1>Inscription :</h1>
      </header>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            {/* Champ pour le prénom */}
            <label htmlFor="firstname">{}</label>
            <input
              ref={pseudonymRef}
              type="text"
              id="pseudonym"
              name="pseudonym"
              required
              placeholder="pseudonyme"
            />
          </div>
          <div>
            {/* Champ pour l'email */}
            <label htmlFor="email">{}</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              required
              placeholder="exemple@email.com"
            />
          </div>
          <button className="button-form" type="submit">
            S&apos;inscrire le membre
          </button>
          {responsevalue && <p className="errormessage">{responsevalue}</p>}
        </form>
      </article>
    </>
  );
}

export default AddUser;
