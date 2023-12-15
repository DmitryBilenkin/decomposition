import './AdBanner.css';
import img from '../../img/adBanner/adBanner.png';

function AdBanner() {
  return (
    <div className='ad-banner'>
        <img src={img} alt='ad-banner'/>
    </div>
  )
}

export default  AdBanner;
