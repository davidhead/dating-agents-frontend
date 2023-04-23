// import HelperText from "./HelperText";
import Label from "./FormLabel";
import Invalid from "./Invalid";
import { useState } from "react";
import HelperText from "./HelperText"

interface TextInputProps {
  value: any;
  onInputChange?: (value: any) => void;
  description?: string;
  placeholder?: string;
  helperText?: string;
  valid?: boolean;
  invalidMessage?: string;
  hintMessage?: string;
  label?: string;
  required?: boolean;
  className?: string;
  maxLength?: number;
  autoComplete?: string;
  name?: string;
  id?: string;
}

export default function TextInput({
  label,
  description,
  placeholder,
  helperText,
  valid,
  invalidMessage,
  hintMessage,
  required,
  onInputChange,
  value,
  className,
  maxLength,
  autoComplete,
  name,
  id,
}: TextInputProps) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    onInputChange(event.target.value);
    setInput(event.target.value);
  };

  return (
    <div className="mt-4">
      <Label label={label} />
      {/* <CornerHint message={hintMessage} /> */}
      <div className={`mt-1 ${className}`}>
        <input
          type="text"
          id={id}
          name={name}
          className="text-input"
          placeholder={placeholder}
          aria-invalid={valid}
          aria-describedby={description}
          onChange={handleInputChange}
          required={required}
          value={value}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
      </div>
      {invalidMessage ? <Invalid message={invalidMessage} /> : null}
      {helperText ? <HelperText helperText={helperText} /> : null}
    </div>
  );
}
