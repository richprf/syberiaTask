import { FC } from "react";
import { Input } from "@heroui/react";

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  placeholder = "Search...",
  onChange,
}) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      variant="bordered"
      className="rounded flex-1"
      classNames={{
        inputWrapper:
          "focus-within:border-gray-400 focus-within:ring-0 focus-within:shadow-none",
        input: "focus:outline-none text-black placeholder:text-gray-400",
      }}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
