import { useContext } from "react";
import { FilterContext } from "@features/contexts/filter";

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
