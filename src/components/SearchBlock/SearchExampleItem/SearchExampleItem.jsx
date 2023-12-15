import './SearchExampleItem.css';

/**
 * Отображение меняющейся части примера поискового запроса
 */
function SearchExampleItem(props) {
  return (
    <div className='search-example__item'>{props.searchExample}</div>
  )
}

export default SearchExampleItem;
