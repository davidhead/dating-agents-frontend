import HelperText from "./HelperText";
import Label from "./FormLabel";
import Invalid from "./Invalid";
import CornerHint from "./CornerHint";
import { useState } from "react";

interface TextInputLargeProps {
  value: string;
  onInputChange: (value: string) => void;
  name?: string;
  rows?: number;
  placeholder?: string;
  helperText?: string;
  valid?: boolean;
  invalidMessage?: string;
  hintMessage?: string;
  label?: string;
  maxLength?: number;
  id?: string;
}

export default function TextInputLarge({
  label,
  id,
  value,
  onInputChange,
  name,
  rows,
  placeholder,
  helperText,
  valid,
  invalidMessage,
  hintMessage,
  maxLength,
}: TextInputLargeProps) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    onInputChange(event.target.value);
    setInput(event.target.value);
  };

  return (
    <div>
      <Label label={label} />
      <CornerHint message={hintMessage} />
      <div className="mt-1">
        <textarea
          id={id}
          name={name}
          rows={rows}
          className="text-input-large"
          placeholder={placeholder}
          aria-invalid={valid}
          onChange={handleInputChange}
          value={value}
          maxLength={maxLength}
        />
      </div>
      {helperText ? <HelperText helperText={helperText} /> : null}
      {invalidMessage ? <Invalid message={invalidMessage} /> : null}
    </div>
  );
}
