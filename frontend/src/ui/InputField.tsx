interface InputFieldProps {
  id?: string;
  type: string;
  value: string;
  onChange: (val: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  required,
  id,
}: InputFieldProps) => {
  return (
    <div>
      <input
        id={id}
        className="bg-secondary text-paragraph text-sm rounded-lg focus:ring-stroke focus:border-stroke block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
