import {
    APARTMENT_PROPERTY,
    COMMERCIAL_PROPERTY,
    HOUSE_PROPERTY,
    LAND_PLOT_PROPERTY,
    PropertyTypeModel
} from "../models/property.type";

type PropertyType= {
    id: PropertyTypeModel;
    icon: string;
    name: string;
};
export const PropertyTypeList: PropertyType[] = [
    {
        id: HOUSE_PROPERTY,
        icon: "fas fa-home",
        name: HOUSE_PROPERTY,
    },
    {
        id: APARTMENT_PROPERTY,
        icon: "far fa-building",
        name: APARTMENT_PROPERTY,
    },
    {
        id: COMMERCIAL_PROPERTY,
        icon: "fas fa-suitcase",
        name: COMMERCIAL_PROPERTY,
    },
    {
        id: LAND_PLOT_PROPERTY,
        icon: "fas fa-th-large",
        name: "Land plot",
    },
];