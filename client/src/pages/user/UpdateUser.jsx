import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import FormUpdateUser from "../../components/FormUpdateUser";

function UpdateUser() {
  const dataUser = useLoaderData();
  const [messageRequest, setMessageRequest] = useState();
  // Rendu du composant formulaire
  return (
    <>
      <header>
        <h1>Inscription :</h1>
        <p>{messageRequest}</p>
      </header>
      <section className="alignment">
        {dataUser.map((value) => (
          <FormUpdateUser
            key={value.id}
            value={value}
            setMessageRequest={setMessageRequest}
          />
        ))}
      </section>
    </>
  );
}
export default UpdateUser;
