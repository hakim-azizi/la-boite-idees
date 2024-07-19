import { useLoaderData } from "react-router-dom";
import { useRef } from "react";

function AddBadIdea() {
  const ideasId = useLoaderData();

  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async (event) => {
   event.preventDefault();

    try {
      const fetchResponseAddIdea = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ideas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            good: "1",
          }),
        }
      );

      const fetchResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bad-ideas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_idea: `${ideasId.id+1}`,
          }),
        }
      );

      console.warn(fetchResponse, fetchResponseAddIdea);
      return null;
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <h1>Ajout d'une mauvaise idée</h1>
      <article>
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
            placeholder="Titre de l'idée'"
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
            placeholder="Veuillez entrée votre"
          />
        </div>
        <button className="button-form" type="submit">
          Ajout d&apos;une idée
        </button>
      </form></article>
    </>
  );
}
export default AddBadIdea;
