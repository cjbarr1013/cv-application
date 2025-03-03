import '../styles/Button.css';

function Button({
  text = '',
  className = '',
  image = null,
  altText = '',
  handleClick,
}) {
  return (
    <button className={'simple-btn ' + className} onClick={handleClick}>
      {image && <img src={image} alt={altText}></img>}
      {text}
    </button>
  );
}

export default Button;
