import { profile, education, achievements } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import "../styles/About.css";

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-h">
      <div className="wrap about">
        <figure className="about__photo">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="900" height="900" loading="lazy" />
        </figure>

        <div className="about__text">
          <h2 id="about-h" className="h2">About me</h2>
          {profile.about.map((p, i) => (
            <p key={i} className="lead">{p}</p>
          ))}

          <dl className="facts">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="socials" aria-label="Find me online">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  <Icon name={s.icon} /> {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__extra">
          <div>
            <h3 className="h3">Education</h3>
            <ol className="edu">
              {education.map((e) => (
                <li key={e.school}>
                  <span className="edu__years">{e.years}</span>
                  <div>
                    <strong>{e.school}</strong>
                    <span>{e.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="h3">Hackathons</h3>
            <ul className="plain">
              {achievements.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
