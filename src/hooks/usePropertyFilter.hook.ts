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
      const filterTuple: boolean[] = [];

      // don't include estates, which has...
      // ...different type than wanted
      if (filter.type && filter.type !== property.type) {
        filterTuple.push(false);
      }
      // ...different location than wanted
      if (filter.location && filter.location.value !== property.location) {
        filterTuple.push(false);
      }
      // ...monthly rent lower than wanted
      if (filter.minPrice && filter.minPrice > property.monthRental) {
        filterTuple.push(false);
      }
      // ...monthly rent higher than wanted
      if (filter.maxPrice && filter.maxPrice < property.monthRental) {
        filterTuple.push(false);
      }
      // ...less room count than wanted
      if (filter.minRooms && filter.minRooms > property.roomCount) {
        filterTuple.push(false);
      }
      // ...higher room count than wanted
      if (filter.maxRooms && filter.maxRooms < property.roomCount) {
        filterTuple.push(false);
      }

      return !filterTuple.length || !filterTuple.includes(false);
    });
  }, [filter, propertyList]);
};
