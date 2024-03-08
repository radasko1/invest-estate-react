import React from "react";
import { EstatePropertyModel } from "../models/estate-property.type";
import { FilterModel } from "../models/filter.type";

export const usePropertyFilter = (
  filter: FilterModel,
  propertyList: EstatePropertyModel[],
): EstatePropertyModel[] => {
  // execute when 'filter' is changed
  return React.useMemo(() => {
    return propertyList.filter((property) => {
      // default values (init values, after reset)
      const priceFilterDefaultValue = filter.minPrice < 0;
      const roomNumberFilterDefaultValue = filter.minRooms < 0;
      const typeDefaultValue = !filter.type;

      const isRoomCountMatch =
        roomNumberFilterDefaultValue ||
        (property.roomCount >= filter.minRooms && filter.maxRooms < 0) ||
        property.roomCount <= filter.maxRooms;
      const isTypeMatch = typeDefaultValue || property.type === filter.type;
      const isPriceMatch =
        priceFilterDefaultValue ||
        (property.monthRental >= filter.minPrice && filter.maxPrice < 0) ||
        property.monthRental <= filter.maxPrice;

      return isRoomCountMatch && isTypeMatch && isPriceMatch;
    });
  }, [filter, propertyList]);
};
