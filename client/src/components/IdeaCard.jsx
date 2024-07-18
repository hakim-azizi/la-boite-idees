import PropTypes from "prop-types";

function IdeaCard({ value }) {
  return (
    <article>
      <h2>{value.title}</h2>
      <p>{value.description}</p>
    </article>
  );
}
export default IdeaCard;
IdeaCard.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
