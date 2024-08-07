import { useLoaderData } from "react-router-dom";
import IdeaCard from "../components/IdeaCard";
import "../style/good-idea.css";

function GoodIdea() {
  const data = useLoaderData();
  return (
    <>
      <header>
        <h1>Les bonnes idées</h1>
      </header>
      <main>
        <section>
          <article>
            <h2>
            La bonne idée :
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              earum laboriosam fugit dicta dolorem voluptatibus quaerat labore
              doloribus id, obcaecati ratione dolor quam! Aliquid laudantium
              deserunt corrupti optio maiores assumenda. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Accusantium vitae nulla numquam
              beatae nam repellendus optio qui voluptatum a earum autem dolorum
              quae corrupti, in, officiis eaque rem molestiae sequi? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Veniam vitae
              quis consectetur quia temporibus animi aut doloribus,
              necessitatibus quae facere rem hic similique officia ratione
              perspiciatis aliquam quibusdam mollitia molestias
            </p>
          </article>
        </section>
        <section className="card">
        {data.map((value) => (
            <IdeaCard key={value.id} value={value} />
          ))}
        </section>
      </main>
    </>
  );
}

export default GoodIdea;
