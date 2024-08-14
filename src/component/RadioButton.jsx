export function RadioButtons({ fieldName, options }) {
  return (
    <div className="radioButtonsContainer">
      <label className="fieldLabel">{fieldName}</label>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <input
              data-testid={`${fieldName}-${option}`}
              id={`${fieldName}-${option}`}
              type="radio"
              name={fieldName}
              value={option}
              required
            />
            <label htmlFor={`${fieldName}-${option}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
