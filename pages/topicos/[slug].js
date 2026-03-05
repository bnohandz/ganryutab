import Link from "next/link";
import { getTopicBySlug, topics } from "../../data/topics";

export default function TopicPage({ topic }) {
  return (
    <main className="landing landing-topic">
      <section className="panel panel-topic">
        <Link href="/" className="back-link">
          ← Voltar para a página inicial
        </Link>

        <span className="status">Tópico</span>
        <h1>{topic.title}</h1>
        <h2>{topic.intro}</h2>

        <section className="topic-story">
          {topic.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </section>
    </main>
  );
}

export function getStaticPaths() {
  return {
    paths: topics.map((topic) => ({
      params: { slug: topic.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    return { notFound: true };
  }

  return {
    props: {
      topic,
    },
  };
}
