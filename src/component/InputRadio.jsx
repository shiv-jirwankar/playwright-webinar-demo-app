export function InputRadio({ value }) {
  return (
    <div>
      <input type="radio" className="radioButton" value={value} />
      <label for={value}>{value}</label>
    </div>
  );
}
