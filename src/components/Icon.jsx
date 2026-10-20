import { FaGithub, FaLinkedinIn, FaHackerrank, FaInstagram } from "react-icons/fa";

const map = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  hackerrank: FaHackerrank,
  instagram: FaInstagram,
};

export default function Icon({ name, ...rest }) {
  const C = map[name];
  return C ? <C aria-hidden="true" {...rest} /> : null;
}
