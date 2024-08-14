export function InputField({ fieldName, placeholder, type }) {
  return (
    <div className="inputFieldContainer">
      {/* <div className="fieldName">{fieldName}</div> */}
      <label htmlFor={fieldName} className="fieldLabel">
        {fieldName}
      </label>
      <input
        data-testid={fieldName}
        id={fieldName}
        type={type}
        className="inputField"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
