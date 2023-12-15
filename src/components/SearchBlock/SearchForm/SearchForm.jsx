import './SearchForm.css';
import yaLogo from '../../../img/yaLogo/yaLogo.png'


function SearchForm() {

  const searchFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className='form-search' onSubmit={searchFormSubmitHandler}>
      <img className='yaLogo' src={yaLogo} alt='yaLogo'/>
      <input className='input-search' type='text'/>
      <button className='btn-search' type='submit'>Найти</button>
    </form>
  )
}

export default SearchForm;