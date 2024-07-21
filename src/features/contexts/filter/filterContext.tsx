import { createContext, useState } from "react";
import { IFilter } from "@shared/types";

type FilterContextType = {
  filter: IFilter[];
  filterList: string[];
  set: (value: IFilter[]) => void;
  add: (category: IFilter) => void;
  toggle: (id: number) => void;
  remove: (category: IFilter) => void;
  reset: () => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

interface FilterProviderProps {
  children: React.ReactNode;
}

const filterAll: IFilter = {
  id: 0,
  title: "Все курсы",
  categoties: ["*"],
  isActive: true,
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filter, setFilter] = useState<IFilter[]>([filterAll]);
  let filterList: string[] = [];

  // Added new filter
  const add = (category: IFilter) =>
    filter.includes(category) ? null : filter.push(category);

  // Remove filter by id
  const remove = (category: IFilter) => {
    if (category.id == 0) return;

    if (filter.includes(category)) {
      const index = filter.indexOf(category);
      filter.splice(index, 1);
    }
  }

  // Reset to default
  const reset = () => setFilter([filterAll]);


  // Toggle on/off filter
  const toggle = (id: number) => {
    const filterItem = filter.find(x => x.id === id);
    if (filterItem) {
      filterItem.isActive = !filterItem.isActive;
      console.info(filterItem)
      updateFilterList();
    }
  }

  // Set filters
  const set = (filters: IFilter[]) => {
    setFilter(filters);
    updateFilterList();
  }

  const updateFilterList = () => {
    const newFilterList: string[] = filter
      .filter(item => item.isActive)
      .flatMap(item => item.categoties);
    
    filterList = newFilterList;
    console.info(filterList)
  }

  return (
    <FilterContext.Provider
      value={{
        filter,
        filterList,
        set,
        add,
        toggle,
        remove,
        reset,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
