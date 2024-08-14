export function Dropdown({ label, fieldName, options }) {
  return (
    <div className="dropdownContainer">
      <label htmlFor={label}>{fieldName}</label>
      <select name={label} data-testid={label}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
