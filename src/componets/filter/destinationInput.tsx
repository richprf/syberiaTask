import { FC } from "react";

interface DestinationInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DestinationInput: FC<DestinationInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Destination"
      className="border p-2 rounded flex-1"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DestinationInput;
