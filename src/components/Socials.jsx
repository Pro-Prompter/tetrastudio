import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Socials({ size }) {
  return (
    <div className="flex items-center justify-center gap-6">
      <a
        href="https://www.instagram.com/tetrastudiopk/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
          className="s text-accent  hover:text-primary"
        />
      </a>

      <a
        href="https://www.facebook.com/tetrastudiopk"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
          className=" text-accent hover:text-primary"
        />
      </a>

      <a
        href="https://www.linkedin.com/company/tetrastudiopk/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
          className="text-accent  hover:text-primary"
        />
      </a>

      <a
        href="https://www.youtube.com/@tetrastudiopk"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
          className="text-accent hover:text-primary"
        />
      </a>
    </div>
  );
}

export default Socials;
