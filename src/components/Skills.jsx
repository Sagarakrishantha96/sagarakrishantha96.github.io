import { useState } from "react";
import { skills } from "../data/portfolio.js";
import "../styles/Skills.css";

export default function Skills() {
  const [selected, setSelected] = useState("React");

  return (
    <section className="section section--alt" id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <h2 id="skills-h" className="h2">Skills</h2>
        <p className="muted section__intro">Pick a skill to see where I've used it.</p>

        <div className="skills">
          <div className="skills__groups">
            {skills.map((g) => (
              <div key={g.group} className="skills__group">
                <h3 className="skills__label">{g.group}</h3>
                <ul>
                  {g.items.map((s) => (
                    <li key={s}>
                      <button
                        className={`chip ${selected === s ? "is-active" : ""}`}
                        aria-pressed={selected === s}
                        onClick={() => setSelected(s)}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
