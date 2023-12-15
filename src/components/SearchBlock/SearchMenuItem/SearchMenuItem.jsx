import './SearchMenuItem.css'

/**
 * Рендеринг 1 элемента из меню поиска
 */
function SearchMenuItem(props) {
  return (
    <div className='search-menu_item'>{props.item}</div>
  )
}

export default  SearchMenuItem;
