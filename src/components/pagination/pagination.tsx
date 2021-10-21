import classnames from 'classnames';
import React, { FC } from 'react';
import { usePaginationData } from './pagination.hook';
import './pagination.scss';
import { PaginationProps } from './pagination.types';

export const Pagination: FC<PaginationProps> = ({
  count,
  handlePagination,
}) => {
  const { tabs, selectedTab, handleSelect } = usePaginationData(count, handlePagination);

  return (
    <>
      {count && (
        <div className="paginationWrapper">
          <div
            onClick={() => {
              handleSelect(1);
            }}
            /* eslint-disable-next-line */
            className={classnames('first', { ['selected']: selectedTab === 1 })}
            >
            1
          </div>
          <div className="dynamicTabsWrapper">
            {tabs.map((item) => {
              return (
                <>
                  {item && (
                    <div
                      onClick={() => {
                        handleSelect(item);
                      }}
                      /* eslint-disable-next-line */
                      className={classnames('tab', { ['selected']: selectedTab === item })}
                    >
                      {item}
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div
            onClick={() => {
              handleSelect(count);
            }}

            /* eslint-disable-next-line */
            className={classnames('last', { ['selected']: selectedTab === count })}
            >
            {count}
          </div>
        </div>
      )}
    </>
  );
};
