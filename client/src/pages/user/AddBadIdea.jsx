import { useRef } from "react";

function AddBadIdea() {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/artists`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: titleRef.current.value,
            description: descriptionRef.current.value,
          }),
        }
      );

      console.warn(fetchResponse);
      return null;
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <h1>Ajout d'une mauvaise idée</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Champ pour le prénom */}
          <label htmlFor="title">{}</label>
          <input
            ref={titleRef}
            type="text"
            id="title"
            name="title"
            required
            placeholder="Titre de la blague"
          />
        </div>
        <div>
          {/* Champ pour le description */}
          <label htmlFor="description">{}</label>
          <textarea
            ref={descriptionRef}
            type="text"
            id="description"
            name="description"
            required
            placeholder="Veuillez entrée la biographie de l'artiste"
          />
        </div>
        <button className="button-form" type="submit">
          Ajout d&apos;une mauvaise idée
        </button>
      </form>
    </>
  );
}
export default AddBadIdea;
