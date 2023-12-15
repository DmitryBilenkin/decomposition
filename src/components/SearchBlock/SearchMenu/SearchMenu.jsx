import SearchMenuItem from '../SearchMenuItem/SearchMenuItem';
import './SearchMenu.css'

/**
 * Рендеринг всего меню поиска
 */
function SearchMenu(props) {
  return (
    <div className='search-menu'>
        {props.searchMenu.map(item => <SearchMenuItem item={item}/>)}
    </div>
  )
}

export default SearchMenu;
