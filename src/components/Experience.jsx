import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { experience } from "../data/portfolio.js";
import "../styles/Experience.css";

const PREVIEW = 4;

function Job({ job }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = job.highlights.length - PREVIEW;
  const shown = expanded || hidden <= 0 ? job.highlights : job.highlights.slice(0, PREVIEW);
  const listId = `job-${job.company.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <li className="job">
      <div className="job__side">
        <h3 className="job__company">{job.company}</h3>
        <p className="job__period">{job.period}</p>
      </div>

      <div className="job__main">
        <ol className={`roles ${job.roles.length > 1 ? "roles--promoted" : ""}`}>
          {job.roles.map((r, i) => (
            <li key={r.title}>
              <span className="roles__title">{r.title}</span>
              <span className="roles__period">{r.period}</span>
              {job.roles.length > 1 && i === 0 && <span className="roles__badge">Promoted</span>}
            </li>
          ))}
        </ol>

        <p className="job__summary">{job.summary}</p>

        <ul className="job__list" id={listId}>
          {shown.map((h) => <li key={h}>{h}</li>)}
        </ul>

        {hidden > 0 && (
          <button
            className="more"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show fewer" : `Show all ${job.highlights.length} contributions`}
            <FiChevronDown aria-hidden="true" />
          </button>
        )}

        <ul className="tags" aria-label="Technologies">
          {job.stack.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="section section--alt" id="experience" aria-labelledby="exp-h">
      <div className="wrap">
        <h2 id="exp-h" className="h2">Experience</h2>
        <ol className="jobs">
          {experience.map((job) => <Job key={job.company} job={job} />)}
        </ol>
      </div>
    </section>
  );
}
