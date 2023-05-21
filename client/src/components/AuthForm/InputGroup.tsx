import { ChangeEventHandler } from "react";

interface InputGroupProps {
  label: string;
  name: string;
  type: string;
  isLoading: boolean;
  autoComplete: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: string;
  value: string;
};

export default function InputGroup(props: InputGroupProps) {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {props.label}
      </label>

      <div className="mt-1">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value}
          disabled={props.isLoading}
          onChange={props.onChange}
          autoComplete={props.autoComplete}
          className={`${props.error ? "border-red-500" : ""} text-black dark:text-white disabled:cursor-wait disabled:bg-gray-200 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-500 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {props.error && <p className="text-red-500 text-xs">{props.error}</p>}
      </div>
    </div>
  );
};

