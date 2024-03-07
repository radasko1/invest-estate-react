import { PropertyTypeModel } from "./property.type";

export type EstatePropertyModel = {
  id: string;
  name: string;
  address: string;
  type: PropertyTypeModel;
  // latX: number;
  // latY: number
  // state: string;
  roomCount: number;
  bathroomCount: number;
  livingSurface: number; // m2
  dayRental: number;
  weekRental: number;
  monthRental: number;
  garageSlots: number; // -1 if not
  pool: boolean;
  freeWifi: boolean;
  airConditioner: boolean;
  mainImage: string;
  images: string[];
};
