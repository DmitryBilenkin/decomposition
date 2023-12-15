import Widget from '../Widget/Widget';
import WidgetWeather from '../WidgetWeather/WidgetWeather';
import WidgetGermanMap from '../WidgetGermanMap/WidgetGermanMap';
import WidgetLive from '../WidgetLive/WidgetLive';
import WidgetVisited from '../WidgetVisited/WidgetVisited';
import WidgetTVPropgramm from '../WidgetTVPropgramm/WidgetTVPropgramm';

import './Widgets.css';

/**
 * Рендер блока виджетов
 */

function Widgets() {
  return (
    <div className='widgets-container'>
      <Widget title='Погода'>
          <WidgetWeather />
      </Widget>
      <Widget title='Карта Германии'>
          <WidgetGermanMap />
      </Widget>
      <Widget title='Эфир'>
          <WidgetLive />
      </Widget>
      <Widget title='Посещаемое'>
        <WidgetVisited />        
      </Widget>
      <Widget title='Телепрограмма'>
          <WidgetTVPropgramm />
      </Widget>
    </div>
  )
}

export default Widgets;
