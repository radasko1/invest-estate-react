import { createContext } from "react";

type PropertyContextModel = {
  property: string;
  setProperty(value: string): void;
};

export const PropertyContext = createContext<PropertyContextModel>({} as PropertyContextModel);
