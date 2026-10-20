import { profile } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <ul className="footer__social">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                <Icon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
