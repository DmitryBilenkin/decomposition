import SearchExampleItem from '../SearchExampleItem/SearchExampleItem';
import './SearchExample.css';
/**
 * Компонент показывает пример поискового запроса
 */
function SearchExample(props) {
  return (
    <div className='search-example'>Найдется всё. Например, <SearchExampleItem searchExample={props.searchExample}/></div>
  )
}

export default SearchExample;
