import Label from "./FormLabel";

interface CheckboxesProps {
    label: string;
}

export default function Checkboxes({label}: CheckboxesProps) {
    const checkboxes = [
      {
        id: "male",
        name: "male",
        label: "Male",
      },
      {
        id: "female",
        name: "female",
        label: "Female",
      },
      {
        id: "non-binary",
        name: "non-binary",
        label: "Non-Binary",
      },
    ];
  
    return (
      <fieldset>
        <legend className="sr-only">Notifications</legend>
        <Label label={label} />
        <div className="space-y-5 flex">
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id={checkbox.id}
                  aria-describedby={`${checkbox.id}-description`}
                  name={checkbox.name}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor={checkbox.id}
                  className="font-medium text-gray-900 mr-10"
                >
                  {checkbox.label}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    );
  }
  