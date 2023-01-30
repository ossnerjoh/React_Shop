import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function Radiobutton({
  label,
  handleFilterChange,
  name,
  value,
  checked
}) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <Form.Check
      name={name}
      type="radio"
      label={label}
      value={value}
      onChange={(e) => {       
        let isChecked = e.target.checked;
        setIsChecked(isChecked);
        handleFilterChange(label);
      }}
      checked={isChecked}
    />
  );
}
