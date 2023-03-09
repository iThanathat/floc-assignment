import Button from "@/components/Button";
import Select from "@/components/Select";
import {
  CONTENT_TYPE_OPTIONS,
  HIRING_MODEL_OPTIONS,
  OBJECTIVE_OPTIONS,
  VALUE_OPTIONS,
} from "../../constants/dropdown";
import { FilterSceneProps } from "./types";

const Filter: React.FC<FilterSceneProps> = ({ filters, setFilters }) => {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between">
        <p className="text-primary font-semibold p-[10px]">filter</p>
        <div className="w-[200px]">
          <Select
            options={CONTENT_TYPE_OPTIONS}
            placeholder="content type"
            defaultValue={filters.contentType}
            onChange={(value) => setFilters({ ...filters, contentType: value })}
          />
        </div>
        <div className="w-[200px]">
          <Select
            options={OBJECTIVE_OPTIONS}
            placeholder="objective"
            defaultValue={filters.contentType}
            onChange={(value) => setFilters({ ...filters, contentType: value })}
          />
        </div>
        <div className="w-[200px]">
          <Select
            options={VALUE_OPTIONS}
            placeholder="value"
            defaultValue={filters.contentType}
            onChange={(value) => setFilters({ ...filters, contentType: value })}
          />
        </div>
        <div className="w-[200px]">
          <Select
            options={HIRING_MODEL_OPTIONS}
            placeholder="hiring model"
            defaultValue={filters.contentType}
            onChange={(value) => setFilters({ ...filters, contentType: value })}
          />
        </div>
        <div className="w-[350px] relative">
          <input
            type="text"
            className="w-full bg-transparent border-b border-primary"
            placeholder="what are you looking for?"
          />
          <Button
            className="absolute bottom-0 right-[-16px]"
            type="primary"
            onClick={() => ""}
          >
            search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
