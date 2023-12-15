import News from './components/NewsBlock/News/News';
import AdvertisingTop from './components/NewsBlock/AdvertisingTop/AdvertisingTop';
import advertisingTopData from './data/advertisingTopData';
import newsList from './data/newslist';
import Search from './components/SearchBlock/Search/Search';
import searchMenu from './data/searchMenu';
import AdBanner from './components/AdBanner/AdBanner';
import Widgets from './components/WidgetsBlock/Widgets/Widgets';

import './App.css';


function App() { 

  return (
    <div className="App">
      <div className='app-top'>
        <News newsList={newsList}/>
        <AdvertisingTop img={advertisingTopData.img} title={advertisingTopData.title} text={advertisingTopData.text} />
      </div>
      <Search searchMenu={searchMenu}/>
      <AdBanner />
      <Widgets />      
    </div>
  );
}

export default App;
