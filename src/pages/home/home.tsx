import React from 'react';
import { Header, MemoSelect, FilmList } from '../../components';
import { Pagination } from '../../components/pagination';
import { Sort } from '../../components/sort';
import { useHomeData } from './home.hook';
import './home.scss';

const Home = () => {
  const {
    films,
    genres,
    handleSearch,
    isFirstDicker,
  } = useHomeData();

  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="contentTop">
          <MemoSelect options={genres} handleSelectOption={handleSearch} />
          <Sort handleSort={handleSearch} />
        </div>
        <FilmList
          genres={genres}
          filmList={isFirstDicker ? films?.results?.slice(0, 10) : films?.results?.slice(10)}
        />
        <Pagination
          handlePagination={handleSearch}
          count={films?.total_pages}
        />
      </div>
    </div>
  );
};

export { Home };
