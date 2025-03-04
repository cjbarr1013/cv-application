import '../styles/Input.css';

function Input({ label, id, type, value, handleChange }) {
  return (
    <div className="my-input">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;
