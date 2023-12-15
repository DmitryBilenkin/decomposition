import './Widget.css';
/**
 * Общий компонент каждого виджета. Применяет одинаковые стили заголовков виджетов и принимает разный контент внутри каждого виджета
 */
function Widget(props) {
  return (
    <div className='widget-container'>
        <div className='widget-title'>{props.title}</div>
        {props.children}
    </div>
  )
}
export default Widget;

