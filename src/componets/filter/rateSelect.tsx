import { FC } from "react";

interface RateSelectProps {
  value: number | null;
  onChange: (value: number) => void;
}

const RateSelect: FC<RateSelectProps> = ({ value, onChange }) => {
  return (
    <select
      value={value ?? 0}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border p-2 rounded"
    >
      <option value={0}>Any</option>
      <option value={20}>20+</option>
      <option value={40}>40+</option>
      <option value={60}>60+</option>
      <option value={80}>80+</option>
      <option value={100}>100</option>
    </select>
  );
};

export default RateSelect;
