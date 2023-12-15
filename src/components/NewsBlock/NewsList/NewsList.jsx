import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';

/**
 * Список отфильтрованных новостей и текущая дата
 */
function NewsList(props) {
  return (
    <div className='newslist'>
        {props.newsList.map(item => <NewsItem key={item.id} icon={item.icon} text={item.text}/>)}
    </div>
  )
}

export default NewsList