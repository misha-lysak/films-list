import { useCallback, useState } from 'react';
import { HandleSearchType, GenresState } from '../../types';

const useSelectData = (handleSelectOption: HandleSearchType) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedOptions, setSelectOptions] = useState<GenresState>([]);

  const handleOpenSelect = useCallback(() => {
    setIsOpenSelect(!isOpenSelect);
  }, [isOpenSelect]);

  const handleRemoveSelectedOption = (id: number) => {
    const filteredSelectedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectOptions(filteredSelectedOptions);
    handleSelectOption({ genresIds: filteredSelectedOptions.map((option) => option.id) });
  };

  return {
    isOpenSelect,
    selectedOptions,
    handleOpenSelect,
    handleRemoveSelectedOption,
    setSelectOptions,
  };
};

export { useSelectData };
