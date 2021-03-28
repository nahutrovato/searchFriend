import {useState} from 'react';
import './styles.css'

const SearchBox = ({onSearch, onClose}) => {
    const [name,setName]=useState('')
    const handleChangeName = ({target:{value}}) => {
        setName(value);
    }

    return(
        <div className='search-box'>
            <h1 className='search-box-title'>Friend information</h1>
            <div className='search-button'>
                <label>
                    <input type='text' value={name} placeholder='¿Name?' onChange={handleChangeName} className='search-box-input'/>
                 </label>
                 <label>
                    <button className='search-box-button' onClick={onSearch}>Search</button>
                </label>
                <label>
                    <button className='close-box-button' onClick={onClose}>Close</button>
                </label>
                
            </div>
          
        </div>
    );
}
export default SearchBox