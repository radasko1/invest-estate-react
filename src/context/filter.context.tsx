import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { EstatePropertyLocationType } from "../models/estate-property-location.type";
import { NumberRangeModel } from "../models/number-range.model";
import { PropertyTypeModel } from "../models/property.model";

type ActionSetFilter = "SET_FILTER";
type ActionReset = "RESET";

const ACTION_SET_FILTER = "SET_FILTER";
const ACTION_RESET = "RESET";

type FilterActionType = ActionSetFilter | ActionReset;

export type FilterState = {
  propertyType?: PropertyTypeModel;
  location?: EstatePropertyLocationType;
  roomCount?: NumberRangeModel;
  minPrice?: number;
  maxPrice?: number;
};

type FilterAction = {
  type: FilterActionType;
  payload: any;
};

/** Initial filter value */
export const initialFilter: FilterState = {};

export const filterReducer: React.Reducer<FilterState, FilterAction> = (
  state: FilterState,
  action: FilterAction,
) => {
  switch (action.type) {
    case ACTION_SET_FILTER:
      return action.payload;
    case ACTION_RESET:
      return initialFilter;
    default:
      return state;
  }
};

/** Context for saving filter criteria */
export const FilterContext = createContext<FilterState>(initialFilter);

export const FilterDispatchContext =
  // @ts-ignore
  createContext<Dispatch<FilterAction>>(null);

export function FilterProvider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(filterReducer, {});

  return (
    <FilterContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {props.children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  );
}

/** Filter Dispatch Hook */
export function useFilterDispatch() {
  return useContext(FilterDispatchContext);
}
/** Filter Hook */
export function useFilter() {
  return useContext(FilterContext);
}
