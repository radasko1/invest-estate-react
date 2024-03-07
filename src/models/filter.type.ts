import { PropertyTypeModel } from "./property.type";

export type FilterModel = {
    type: PropertyTypeModel;
    rooms: number;
    minPrice: number;
    maxPrice: number;
}