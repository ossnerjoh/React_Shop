import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function Radiobutton({
  label,
  handleFilterChange,
  name,
  value
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Form.Check
      name={name}
      type="radio"
      label={label}
      value={value}
      onChange={(e) => {
        console.log(e.target.value);
        console.log(e.target.checked);
        let isChecked = e.target.checked;
        setIsChecked(isChecked);
        handleFilterChange(label);
      }}
      checked={isChecked}
    />
  );
}
