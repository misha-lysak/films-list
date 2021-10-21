import { useState } from 'react';
import { HandleSearchType } from '../../types';

const usePaginationData = (count?: number, handlePagination?: HandleSearchType) => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const tabs = [
    count && selectedTab + 1 > count ? selectedTab - 5 : null,
    count && selectedTab + 2 > count ? selectedTab - 4 : null,
    count && selectedTab + 3 > count ? selectedTab - 3 : null,
    selectedTab - 2 > 1 ? selectedTab - 2 : null,
    selectedTab - 1 > 1 ? selectedTab - 1 : null,
    selectedTab === 1 || selectedTab === count ? null : selectedTab,
    count && selectedTab + 1 < count ? selectedTab + 1 : null,
    count && selectedTab + 2 < count ? selectedTab + 2 : null,
    selectedTab - 2 < 1 ? selectedTab + 3 : null,
    selectedTab - 3 < 1 ? selectedTab + 4 : null,
  ];

  const handleSelect = (value: number) => {
    if (typeof value === 'string') {
      return;
    }
    if (selectedTab !== value && handlePagination) {
      handlePagination({
        page: value,
        isFetch:
          !((value % 2 === 0 && value - 1 === selectedTab)
          || (value % 2 !== 0 && value + 1 === selectedTab)),
      });
      setSelectedTab(value);
    }
  };

  return {
    tabs,
    selectedTab,
    handleSelect,
  };
};

export { usePaginationData };
