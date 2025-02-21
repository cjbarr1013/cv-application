import githubIcon from '../assets/icons/github.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <p>Made by:</p>
      <a href="https://github.com/cjbarr1013/cv-application" target="_blank">
        <span>cjbarr1013</span>
        <img src={githubIcon} alt="github icon" />
      </a>
    </footer>
  );
}

export default Footer;
