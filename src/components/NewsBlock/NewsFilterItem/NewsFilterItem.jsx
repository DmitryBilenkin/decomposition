import './NewsFilterItem.css'

function NewsFilterItem(props) {

    const onClickHandler = (elem) => {
        props.filterNews(elem.target.id)
      };

  return (
    <div className='news-filters__item' onClick={onClickHandler} id={props.id}>{props.title}</div>
  )
}

export default  NewsFilterItem;
