import menuUp from '../assets/icons/menu-up.svg';
import menuDown from '../assets/icons/menu-down.svg';
import '../styles/DropdownBtn.css';

function DropdownBtn(props) {
  return (
    <button className="dropdown-btn">
      <h2>{props.text}</h2>
      <img
        src={props.arrowStart === 'up' ? menuUp : menuDown}
        alt={`menu ${props.arrowStart}`}
      ></img>
    </button>
  );
}

export default DropdownBtn;
