import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMapPin, FiCopy, FiCheck } from "react-icons/fi";
import { profile, emailjsConfig } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import "../styles/Contact.css";

const configured = emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey;

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <div className="email">
      <a href={`mailto:${profile.email}`} className="email__link">{profile.email}</a>
      <button className="icon-btn" onClick={copy} aria-label={copied ? "Email copied" : "Copy email address"}>
        {copied ? <FiCheck /> : <FiCopy />}
      </button>
      <span className="email__note" role="status">{copied ? "Copied" : ""}</span>
    </div>
  );
}

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | invalid

  const send = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    if (!data.get("from_name") || !data.get("reply_to") || !data.get("message")) {
      setStatus("invalid");
      return;
    }

    // No EmailJS keys yet: open the visitor's mail app instead.
    if (!configured) {
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("from_name")} (${data.get("reply_to")})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, form.current, {
        publicKey: emailjsConfig.publicKey,
      });
      setStatus("sent");
      form.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-h">
      <div className="wrap contact">
        <div>
          <h2 id="contact-h" className="h2 contact__title">Say hello</h2>
          <p className="lead">
            Have a question about my work, an opportunity to share, or just want to talk tech? My inbox
            is always open, so drop me a message.
          </p>
          <CopyEmail />
          <ul className="contact__list">
            <li><FiPhone aria-hidden="true" /><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
            <li><FiMapPin aria-hidden="true" />{profile.location}</li>
          </ul>
          <ul className="socials">
            {profile.socials.slice(0, 3).map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer"><Icon name={s.icon} /> {s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <form ref={form} onSubmit={send} className="form" noValidate>
          <label>
            Your name
            <input name="from_name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="reply_to" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p className={`form__status form__status--${status}`} role="status">
            {status === "sent" && "Message sent. I'll get back to you soon."}
            {status === "invalid" && "Fill in your name, email and message to send."}
            {status === "error" && `Message not sent. Email me directly at ${profile.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}
