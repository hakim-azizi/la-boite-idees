import { useLoaderData } from "react-router-dom";
import FormUpdateIdea from "../../components/FormUpdateIdea";


function UpdateArtist() {
  const dataBadIdea = useLoaderData();

  return (
    <>
      <h1>modification d'une mauvaise idées</h1>
      <section className="alignment">
        {dataBadIdea.map((value) => (
          <FormUpdateIdea key={value.id} value={value} />
        ))}
      </section>
    </>
  );
}
export default UpdateArtist;
