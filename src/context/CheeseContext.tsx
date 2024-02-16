import { createContext } from "react";
import { Cheese } from "../types";

type CheeseContextType = {
    cheeses: Cheese[];
    // isSelected: (cheese: Cheese) => boolean;
    isSelected: boolean;
    setSelected: (isSelected: boolean) => void;
}

export const CheeseContext = createContext<CheeseContextType>({
    cheeses: [],
    isSelected: false,
    setSelected: () => {}
});