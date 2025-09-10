import { FC } from "react";
import { Input } from "@heroui/react";

interface CardInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  className?: string;
  error?: any; 
}

const CardInput: FC<CardInputProps> = ({
  label,
  value,
  onChange,
  className,
  error,
}) => {
  const handleChange = (val: string) => {
    const onlyDigits = val.replace(/\D/g, "");
    onChange(onlyDigits);
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-sm font-medium">{label}</label>
      <Input
        type="text"
        variant="bordered"
        value={value}
        placeholder="1234 5678 9012 3456"
        onChange={(e) => handleChange(e.target.value)}
        classNames={{
          inputWrapper: `focus-within:border-gray-400 focus-within:ring-0 focus-within:shadow-none ${
            error ? "border-red-500" : ""
          }`, 
          input: "focus:outline-none text-white placeholder:text-gray-400",
        }}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>} {/* پیام خطا */}
    </div>
  );
};

export default CardInput;
