import "../styles/StylesSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === e.target.pathname) {
      e.preventDefault();
    }
  };

  return (
    <aside>
      <ul className="grid">
        <li className="side">
          <a href="/" onClick={handleClick}>
            Home
            <span>
              <FontAwesomeIcon
                icon={faRotateRight}
                className={location.pathname === "/" ? "" : "my-icon"}
              />
            </span>
          </a>
        </li>
        <li className="side1">
          <a href="/cv" onClick={handleClick}>
            CV
            <span>
              <FontAwesomeIcon
                icon={faRotateRight}
                className={location.pathname === "/cv" ? "" : "my-icon"}
              />
            </span>
          </a>
        </li>
        <li className="side2">
          <a href="/skills" onClick={handleClick}>
            Skills
            <span>
              <FontAwesomeIcon
                icon={faRotateRight}
                className={location.pathname === "/skills" ? "" : "my-icon"}
              />
            </span>
          </a>
        </li>
        <li>
          <a className="side3" href="/projects" onClick={handleClick}>
            Projekte
            <span>
              <FontAwesomeIcon
                icon={faRotateRight}
                className={location.pathname === "/projects" ? "" : "my-icon"}
              />
            </span>
          </a>
        </li>
        <li>
          <a className="side4" href="/backend" onClick={handleClick}>
            Backend
            <span>
              <FontAwesomeIcon
                icon={faRotateRight}
                className={location.pathname === "/backend" ? "" : "my-icon"}
              />
            </span>
          </a>
        </li>

        <li className="side5">
          <a href="/kontakt" onClick={handleClick}>
            Kontakt
            <span>
              <FontAwesomeIcon
                icon={faRotateRight}
                className={location.pathname === "/kontakt" ? "" : "my-icon"}
              />
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
