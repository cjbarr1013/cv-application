import DropdownBtn from './DropdownBtn.jsx';
import DropdownOpen from './DropdownOpen.jsx';
import '../styles/Dropdown.css';

function Dropdown(props) {
  return (
    <div className="dropdown">
      <DropdownBtn text={props.text} arrowStart={props.arrowStart} />
    </div>
  );
}

export default Dropdown;
