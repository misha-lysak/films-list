import React, { FC } from 'react';
import { useSelectData } from './select.hook';
import './select.scss';
import { SelectProps } from './select.types';

const Select: FC<SelectProps> = ({ handleSelectOption, options }) => {
  const {
    isOpenSelect,
    selectedOptions,
    handleOpenSelect,
    handleRemoveSelectedOption,
    setSelectOptions,
  } = useSelectData(handleSelectOption);

  return (
    <div className="selectWrapper">
      <div className="select">
        {selectedOptions?.[0]?.id ? (
          selectedOptions?.map(({ id, name }) => (
            <div
              key={id}
              className="chosenOptionsWrapper"
              onClick={() => handleRemoveSelectedOption(id)}
            >
              <span className="chosenOptionName">{name}</span>
              <div className="deleteChosenOption">+</div>
            </div>
          ))
        ) : (
          <p className="emptyValue">Choose some category</p>
        )}
        <div className="toggleOpenSelect" onClick={() => handleOpenSelect()}>
          &#x27BE;
        </div>
      </div>
      {isOpenSelect && (
        <div className="optionsWrapper">
          {options.filter((option) => !selectedOptions?.some((sOption) => sOption.id === option.id))
            .map(({ id, name }) => (
              <div
                key={id}
                onClick={() => {
                  handleSelectOption({
                    genresIds: [...selectedOptions.map((sOption) => sOption.id), id],
                  });
                  setSelectOptions((prev: { id: number; name: string }[]) => [
                    ...prev,
                    { id, name },
                  ]);
                  handleOpenSelect();
                }}
                className="option"
              >
                {name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export const MemoSelect = React.memo(Select);
