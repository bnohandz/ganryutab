import Link from "next/link";
import { topics } from "../data/topics";

function Home() {
  return (
    <main className="landing">
      <section className="panel">
        <span className="status">Em breve</span>

        <h1>Jornada pelo Japão Feudal</h1>

        <h2>
          Estamos preparando um espaço dedicado às histórias, curiosidades e
          tradições que marcaram séculos da cultura japonesa.
        </h2>

        <section className="topics">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              className="topic-link"
              href={`/topicos/${topic.slug}`}
            >
              {topic.title}
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Home;
