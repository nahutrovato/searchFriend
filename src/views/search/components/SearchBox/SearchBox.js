import {useState} from 'react';
import './styles.css'

const SearchBox = () => {
    const [name,setName]=useState('')
    const handleChangeName = ({target:{value}}) => {
        setName(value);
    }
    return(
        <div className='search-box'>
            <h1 className='search-box-title'>Buscador de amigos</h1>
            <div className='search-button'>
                <label>
                    <input type='text' value={name} placeholder='Ingrese un nombre' onChange={handleChangeName} className='search-box-input'/>
                 </label>
                 <label>
                    <button className='search-box-button'>Buscar</button>
                </label>
                <label>
                    <button className='search-box-button'>Cerrar</button>
                </label>
                
            </div>
          
        </div>
    );
}
export default SearchBox