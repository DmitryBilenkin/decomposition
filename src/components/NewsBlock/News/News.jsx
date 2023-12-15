import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import CurrentDate from '../CurrentDate/CurrentDate';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import exchangeRatesData from '../../../data/exchangeRatesData';
import { useState } from 'react';

import './News.css';

/**
 * Новостной блок. Отображает список новостей по выбранным фильтрам и курс валют
 */
function News(props) {
  const [status, setStatus] = useState('now');

  const filterNews = (stat) => {
    setStatus(stat);
  };

  const newsListFiltered = props.newsList.filter(newsItem => newsItem.status === status);
  const date = '31 июля, среда 02 32'; // дата хардкодная


  return (
    <div className='top-container'>
      <div className='news-container'>
        <div className='news-container__top'>
          <NewsFilters filterNews={filterNews} />
          <CurrentDate date={date} />
        </div>
        <NewsList newsList={newsListFiltered} />
        <ExchangeRates exchangeRatesData={exchangeRatesData}/>
      </div>      
    </div>
  );
}

export default News
