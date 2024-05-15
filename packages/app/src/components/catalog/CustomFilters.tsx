import { DefaultEntityFilters } from "@backstage/plugin-catalog-react";
import { BusinessAreaFilter } from "./BusinessAreas/BusinessAreaFilter";

export type CustomFilters = DefaultEntityFilters & {
    businessAreas?: BusinessAreaFilter;
  };