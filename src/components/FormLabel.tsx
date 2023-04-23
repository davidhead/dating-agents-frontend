interface LabelProps {
  label: string;
  theme?: string;
}

export default function Label({ label, theme }: LabelProps) {
  return (
    <label className={`label ${theme === "dark" ? "text-white" : null}`}>
      {label}
    </label>
  );
}
