import newsFilters from '../../../data/filters';
import NewsFilterItem from '../NewsFilterItem/NewsFilterItem';
import './NewsFilters.css';


/**
 * Компонени фильтрует новости по темам
 */
function NewsFilters(props) { 
  
  return (  
    <> 
      <div className='news-filters'>
        {newsFilters.map(filter => <NewsFilterItem id={filter.id} title={filter.title}  filterNews={props.filterNews}/>)}
      </div>
    </>
    
  )
}

export default NewsFilters;
