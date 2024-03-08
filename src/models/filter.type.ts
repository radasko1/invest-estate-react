import { PropertyTypeModel } from "./property.type";

export type FilterModel = {
  type: PropertyTypeModel;
  minRooms: number;
  maxRooms: number;
  minPrice: number;
  maxPrice: number;
};
