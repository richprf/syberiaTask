// components/ui/NumberInput.tsx
import { FC } from "react";
import { Input } from "@heroui/react";

interface NumberInputProps {
  label: string;
  value: number | "";
  onChange: (val: number) => void;
  placeholder?: string;
  className?: string;
}

const NumberInput: FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-sm font-medium">{label}</label>
      <Input
        type="number"
        variant="bordered"
        value={value as string}
        placeholder={placeholder}
        onChange={(e) => onChange(Number(e.target.value))}
        classNames={{
          inputWrapper: "h-14 rounded-[16px]",
          input: "text-black placeholder:text-gray-400",
        }}
      />
    </div>
  );
};

export default NumberInput;
