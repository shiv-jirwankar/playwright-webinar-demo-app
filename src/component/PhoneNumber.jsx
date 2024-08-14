export function PhoneNumber({
  fieldName,
  type,
  placeholder,
  value,
  handleChange,
  isValid,
}) {
  return (
    <div className="phoneContainer">
      <label htmlFor={fieldName} className="phoneLabel">
        {fieldName}
      </label>
      <input
        type={type}
        name={fieldName}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={10}
        className="phoneInput"
        pattern="[0-9]{10}"
      />
      {!isValid && (
        <p className="phoneError">Please enter a 10 digit phone number.</p>
      )}
    </div>
  );
}
