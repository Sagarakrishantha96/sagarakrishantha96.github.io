import { useMemo } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, academic } from "../data/portfolio.js";
import "../styles/Work.css";

function Projects({ filter, setFilter }) {
  const techs = useMemo(() => {
    const count = {};
    projects.forEach((p) => p.stack.forEach((t) => (count[t] = (count[t] || 0) + 1)));
    return Object.keys(count).sort((a, b) => count[b] - count[a]);
  }, []);

  const visible = filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter));

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by technology">
        {["All", ...techs].map((t) => (
          <button
            key={t}
            className={`chip ${filter === t ? "is-active" : ""}`}
            aria-pressed={filter === t}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <ul className="projects">
          {visible.map((p) => (
            <li key={p.title} className={`project ${p.featured && filter === "All" ? "project--featured" : ""}`}>
              <div className="project__img">
                <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
              </div>
              <div className="project__body">
                <h4 className="h3">{p.title}</h4>
                <p>{p.description}</p>
                <ul className="tags" aria-label="Built with">
                  {p.stack.map((t) => (
                    <li key={t} className={t === filter ? "is-match" : ""}>{t}</li>
                  ))}
                </ul>
                <div className="project__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <FiGithub aria-hidden="true" /> View code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <FiExternalLink aria-hidden="true" /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">
          None of my personal projects use {filter}; I use it in my professional work above.{" "}
          <button className="link" onClick={() => setFilter("All")}>Show all projects</button>
        </p>
      )}
    </>
  );
}

export default function Work({ filter, setFilter }) {
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <h2 id="work-h" className="h2">Personal projects</h2>
        <Projects filter={filter} setFilter={setFilter} />

        <div className="sub">
          <h3 className="sub__title">University projects</h3>
        </div>
        <ul className="academic">
          {academic.map((a) => (
            <li key={a.title}>
              <span className="academic__year">{a.year}</span>
              <div>
                <h4>
                  {a.url ? <a href={a.url} target="_blank" rel="noreferrer">{a.title}</a> : a.title}
                </h4>
                <p className="academic__kind">{a.kind}</p>
                <p>{a.text}</p>
              </div>
              <ul className="tags academic__tags">
                {a.stack.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
