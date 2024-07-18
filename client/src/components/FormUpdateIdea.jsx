import { useRef } from "react";
import PropTypes from "prop-types";

import FormDelete from "./FormDelete";

function FormUpdateIdea({ value, setMessageRequest }) {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ideas/update/${value.id_idea}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titleRef.current.value,
            description: descriptionRef.current.value,
          }),
        }
      );

      console.warn(fetchResponse);
    } catch (err) {
      return err;
    }
    return null;
  };

  return (
    <>
      {}
      <article>
        <h2 className="h2-user">{value.title}</h2>
        <form onSubmit={handleSubmit} className="form-admin">
          <div>
            {/* Champ pour le titre de la photo */}
            <label htmlFor="title">{}</label>
            <input
              ref={titleRef}
              type="text"
              id="title"
              name="title"
              required
              placeholder={value.title}
            />
          </div>
          <div>
            {/* Champ pour la description de la photo */}
            <label htmlFor="description">{}</label>
            <textarea
              ref={descriptionRef}
              type="text"
              id="description"
              name="description"
              required
              placeholder={value.description}
            />
          </div>

          <button className="button-form" type="submit">
            Modifier une idée
          </button>
        </form>
        <FormDelete
          setMessageRequest={setMessageRequest}
          item="good-idea"
          id={value.id}
        />
      </article>
    </>
  );
}

export default FormUpdateIdea;
FormUpdateIdea.propTypes = {
  setMessageRequest: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.number.isRequired,
    })
  ).isRequired,
};
