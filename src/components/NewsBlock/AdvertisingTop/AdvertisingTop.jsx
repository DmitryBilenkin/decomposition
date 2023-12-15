import './AdvertisingTop.css';


function AdvertisingTop(props) {
  return (
    <div className='top-ad'>
        <div className='top-ad__img'>{props.img}</div>
        <h3 className='top-ad__title'>{props.title}</h3>
        <p className='top-ad__text'>{props.text}</p>        
    </div>
  )
}

export default AdvertisingTop
