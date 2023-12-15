import './NewsItem.css';

/**
 * Рендер 1 новости
 */
 function NewsItem(props) {
  return (
    <div className='newslist-item'>{props.icon + ' ' + props.text}</div>
  )
}

export default NewsItem;
