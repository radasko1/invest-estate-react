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
      // Different type than wanted
      if (filter.type && filter.type !== property.type) {
        return false;
      }
      // Different location than wanted
      if (filter.location && filter.location.value !== property.location) {
        return false;
      }
      // Monthly rent lower than wanted
      if (filter.minPrice && filter.minPrice > property.monthRental) {
        return false;
      }
      // Monthly rent higher than wanted
      if (filter.maxPrice && filter.maxPrice < property.monthRental) {
        return false;
      }
      // Less room count than wanted
      if (filter.minRooms && filter.minRooms > property.roomCount) {
        return false;
      }
      // Higher room count than wanted
      if (filter.maxRooms && filter.maxRooms < property.roomCount) {
        return false;
      }
      return true;
    });
  }, [filter, propertyList]);
};
