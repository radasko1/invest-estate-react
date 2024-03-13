import React from "react";
import { FilterState } from "../context/filter.context";
import { EstatePropertyModel } from "../models/estate-property.model";

export const usePropertyFilter = (
  filter: FilterState,
  propertyList: EstatePropertyModel[],
): EstatePropertyModel[] => {
  // execute when 'filter' is changed
  return React.useMemo(() => {
    return propertyList.filter((property) => {
      // Different type than wanted
      if (filter.propertyType && filter.propertyType !== property.type) {
        return false;
      }
      // Different location than wanted
      if (filter.location && filter.location !== property.location) {
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
      if (filter.roomCount && filter.roomCount.min > property.roomCount) {
        return false;
      }
      // Higher room count than wanted
      if (filter.roomCount && filter.roomCount.max < property.roomCount) {
        return false;
      }

      return true;
    });
  }, [filter, propertyList]);
};
