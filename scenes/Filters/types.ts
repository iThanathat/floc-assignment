import { Dispatch, SetStateAction } from "react";

export type FilterSceneProps = {
  filters: {
    contentType: string;
    objective: string;
    value: string;
    hiringModel: string;
  };
  setFilters: Dispatch<
    SetStateAction<{
      contentType: string;
      objective: string;
      value: string;
      hiringModel: string;
    }>
  >;
};
