import React from "react";
import { EstatePropertyModel } from "../models/estate-property.type";
import { FilterModel } from "../models/filter.type";

export const usePropertyFilter = (
  filter: FilterModel,
  propertyList: EstatePropertyModel[],
): EstatePropertyModel[] => {
  return React.useMemo(() => {
    return propertyList.filter((property) => {
      const { minRooms, maxRooms, type, minPrice, maxPrice } = filter;
      return (
        (minRooms < 0 || property.roomCount >= minRooms) &&
        (maxRooms < 0 || property.roomCount <= maxRooms) &&
        (!type || property.type === type) &&
        (minPrice < 0 || property.monthRental >= minPrice) &&
        (maxPrice < 0 || property.monthRental <= maxPrice)
      );
    });
  }, [filter, propertyList]);
};
