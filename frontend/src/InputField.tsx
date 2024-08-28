interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (val: React.SetStateAction<string>) => void;
}

const InputField = ({
  id,
  type,
  value,
  onChange,
  placeholder,
}: InputFieldProps) => {
  return (
    <input
      className="border-black bg-blue-400 border-2"
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required
    />
  );
};

export default InputField;
