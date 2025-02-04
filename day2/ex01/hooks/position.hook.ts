import { IPositionContext } from "@/types/position.types";
import { useState } from "react";

export const usePosition = (): IPositionContext => {
  const [currentPosition, setCurrentPosition] = useState("Default");
  return {
    currentPosition,
    setCurrentPosition,
  };
};
