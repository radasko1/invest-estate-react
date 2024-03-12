import { DropdownOptionModel } from "./dropdown-option.model";
import { PropertyTypeModel } from "./property.model";

export type FilterModel = {
  type?: PropertyTypeModel;
  minRooms?: number;
  maxRooms?: number;
  minPrice?: number;
  maxPrice?: number;
  location?: DropdownOptionModel;
};
