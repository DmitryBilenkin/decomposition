import SearchMenu from '../SearchMenu/SearchMenu';
import SearchForm from '../SearchForm/SearchForm';
import SearchExample from '../SearchExample/SearchExample';

import './Search.css'

/**
 * Компонент блока "Поиск". Рендеринг меню поиска, поисковой строки, примера поиска.
 * @param {[]} props массив названий элементов меню поиска
 */
function Search(props) {
  const searchExample = 'фаза луны сегодня'
  return (
    <div className='search-container'>
      <SearchMenu searchMenu={props.searchMenu}/>
      <SearchForm />
      <SearchExample searchExample={searchExample}/>
    </div>
  )
}

export default Search
