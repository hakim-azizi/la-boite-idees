import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import FormUpdateIdea from "../../components/FormUpdateIdea";

function UpdateGoodIdea() {
  const [messageRequest, setMessageRequest] = useState("");
  const dataGoodIdea = useLoaderData();

  return (
    <>
      <h1>Modification d&apos;une bonne idée</h1>
      <p>{messageRequest}</p>
      <section className="alignment">
        {dataGoodIdea.map((value) => (
          <FormUpdateIdea
            key={value.id}
            value={value}
            setMessageRequest={setMessageRequest}
          />
        ))}
      </section>
    </>
  );
}
export default UpdateGoodIdea;
