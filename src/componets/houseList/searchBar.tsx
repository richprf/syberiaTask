import { FC } from "react";
import SearchInput from "../common/input/input";
import FilterModal from "../filter/filterModal";

interface SearchBarProps {
  onSearch: (q: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="flex gap-4 pt-1">
      <FilterModal />
      <SearchInput placeholder="Search houses..." onChange={onSearch} />
    </div>
  );
};

export default SearchBar;
