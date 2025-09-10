import { FC } from "react";
import { Input } from "@heroui/react";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  error?: string; 
}

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  error,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-sm font-medium">{label}</label>
      <Input
        variant="bordered"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        classNames={{
          inputWrapper: `focus-within:border-gray-400 focus-within:ring-0 focus-within:shadow-none ${
            error ? "border-red-500" : ""
          }`, 
          input: "focus:outline-none text-white placeholder:text-gray-400",
        }}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>} 
    </div>
  );
};

export default TextInput;
