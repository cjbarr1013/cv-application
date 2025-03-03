import menuUp from '../assets/icons/menu-up.svg';
import menuDown from '../assets/icons/menu-down.svg';
import '../styles/Dropdown.css';

function Dropdown({
  open = false,
  text = '',
  openDirection = 'down',
  children,
  handleClick,
}) {
  return (
    <div className="dropdown" id={text.toLowerCase()}>
      <button className="dropdown-btn" onClick={handleClick}>
        <h2>{text}</h2>
        <img
          className={open ? 'rotate' : ''}
          src={openDirection === 'down' ? menuDown : menuUp}
          alt={`menu ${openDirection} arrow`}
        ></img>
      </button>
      <div className={'dropdown-content' + (open ? ' show' : '')}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
