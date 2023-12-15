import './CurrentDate.css'

/**
 *Отображение текущей даты и времени
 */
function CurrentDate(props) {
  return (
    <div className='date'>{props.date}</div>
  )
}

export default CurrentDate
