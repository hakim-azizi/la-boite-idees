import { useLoaderData } from "react-router-dom";import { useState } from "react";
import FormUpdateUser from "../../components/FormUpdateUser";


function UpdateUser() {
  const dataBaduser=useLoaderData();
  const [messageRequest,setMessageRequest]=useState();
  // Rendu du composant formulaire
  return (
    <>
      <header>
        <h1>Inscription :</h1>
        <p>{messageRequest}</p>
      </header>
      <section className="alignment">
        {dataBaduser.map((value) => (
          <FormUpdateUser key={value.id} value={value} setMessageRequest={setMessageRequest} />
        ))}
      </section>
    </>
  );
}
export default UpdateUser;
