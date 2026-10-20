import { FiMapPin, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio.js";
import "../styles/Hero.css";

// The page's one orchestrated moment: the name rises in letter by letter (CSS).
function Word({ text, start }) {
  return (
    <span className="hero__word" aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span key={i} style={{ "--d": `${start + i * 35}ms` }}>{ch}</span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="hero__hello">
              <img src={profile.photo} alt="" width="44" height="44" />
              Hi, I'm
            </p>
            <h1 className="hero__name">
              <span className="sr-only">{profile.name}</span>
              <Word text={profile.firstName} start={100} />
              <Word text={profile.lastName} start={330} />
            </h1>

            <div className="hero__after">
              <p className="hero__role">
                {profile.role}
              </p>
              <p className="hero__intro">{profile.intro}</p>

              <div className="hero__cta">
                <a href="#work" className="btn">See my work</a>
                <a href={profile.cv} download className="btn btn--ghost">
                  <FiDownload aria-hidden="true" /> Download CV
                </a>
              </div>

              <p className="hero__meta">
                <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="hero__proof"></p>
      </div>
    </section>
  );
}
