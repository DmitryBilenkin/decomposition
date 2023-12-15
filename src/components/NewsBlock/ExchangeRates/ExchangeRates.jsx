import './ExchangeRates.css';
import ExchangeRatesItem from '../ExchangeRatesItem/ExchangeRatesItem';

/**
 * Компонент отображения курса валют
 */
 function ExchangeRates(props) {
  return (
    <div className='rates-container'>
        {props.exchangeRatesData.map(rate => 
        <ExchangeRatesItem 
            key={rate.id} 
            name={rate.name} 
            value={rate.value} 
            change={rate.change}
        />)}
    </div>
  )
}

export default ExchangeRates
