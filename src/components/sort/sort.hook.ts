/* eslint-disable */
import { useCallback, useMemo, useState } from 'react';
import { SortList } from '../../types';
import { SortProps } from './sort.types';

const useSortData = (handleSort: SortProps['handleSort']) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const handleOpenSelect = useCallback(() => {
    setIsOpenSelect(!isOpenSelect);
  }, [isOpenSelect]);

  const sortValues = useMemo(
    () => [
      { id: SortList.SORT_ASC, name: 'By oldest' },
      { id: SortList.SORT_DESC, name: 'By newest' },
    ],
    [],
  );

  const handleSelect = (sortName: string, sortValue: SortList) => {
    handleSort({ sortValue });
    setSortBy(sortName);
  };

  return {
    isOpenSelect,
    sortBy,
    sortValues,
    handleSelect,
    handleOpenSelect,
  };
};

export { useSortData };
