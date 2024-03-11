import React from "react";
import { EstatePropertyModel } from "../models/estate-property.model";
import { FilterModel } from "../models/filter.model";

export const usePropertyFilter = (
  filter: FilterModel,
  propertyList: EstatePropertyModel[],
): EstatePropertyModel[] => {
  // execute when 'filter' is changed
  return React.useMemo(() => {
    return propertyList.filter((property) => {
      const { minPrice, maxPrice, minRooms, maxRooms, type } = filter;

      // default values (init values, after reset)
      const priceFilterDefaultValue = minPrice < 0;
      const roomNumberFilterDefaultValue = minRooms < 0;
      const typeDefaultValue = !type;

      const isRoomCountMatch =
        roomNumberFilterDefaultValue ||
        (property.roomCount >= minRooms && maxRooms < 0) ||
        property.roomCount <= maxRooms;
      const isTypeMatch = typeDefaultValue || property.type === filter.type;
      const isPriceMatch =
        priceFilterDefaultValue ||
        (property.monthRental >= minPrice && maxPrice < 0) ||
        property.monthRental <= maxPrice;

      return isRoomCountMatch && isTypeMatch && isPriceMatch;
    });
  }, [filter, propertyList]);
};
