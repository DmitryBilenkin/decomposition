import './ExchangeRatesItem.css'


function ExchangeRatesItem(props) {
  return (
    <div className='rate-item-container'>
        <div className='rate-item name'>{props.name}</div>
        <div className='rate-item value'>{props.value}</div>
        <div className='rate-item change'>{props.change}</div>
    </div>
  )
}

export default ExchangeRatesItem
