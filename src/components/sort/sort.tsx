import React, {
  FC,
} from 'react';
import { useSortData } from './sort.hook';
import './sort.scss';
import { SortProps } from './sort.types';

export const Sort: FC<SortProps> = ({ handleSort }) => {
  const {
    isOpenSelect,
    sortBy,
    sortValues,
    handleSelect,
    handleOpenSelect,
  } = useSortData(handleSort);
  
  return (
    <div className="sortWrapper">
      <div onClick={() => handleOpenSelect()} className="select">
        {sortBy ? (
          <span className="chosenOptionName">{sortBy}</span>
        ) : (
          <span className="chosenOptionName">Sort</span>
        )}

        <div className="toggleOpenSelect" onClick={() => handleOpenSelect()}>
          &#x27BE;
        </div>
      </div>
      {isOpenSelect && (
        <div className="optionsWrapper">
          {sortValues.map(({ id, name }) => (
            <div
              key={id}
              onClick={() => {
                handleOpenSelect();
                handleSelect(name, id);
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
