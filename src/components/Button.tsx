interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
}

export default function Button({ label, type }: ButtonProps) {
  return (
    <button
      type={type}
      className="mt-6 max-w-xs rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {label}
    </button>
  );
}
