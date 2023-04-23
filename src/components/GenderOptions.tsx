import Label from "./FormLabel";

interface InlineRadiosProps {
  label: string;
}

export default function InlineRadios({ label }: InlineRadiosProps) {
  const genderOptions = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "non-binary", title: "Non-Binary" },
  ];
  return (
    <div>
      <Label label={label} />
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {genderOptions.map((option: any) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name="notification-method"
                type="radio"
                defaultChecked={option.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={option.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
