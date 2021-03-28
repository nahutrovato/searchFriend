import { useState } from 'react'
import SearchBox from './components/SearchBox/SearchBox'
import './styles.css'
const Search = () =>{
    const [isAtTop,setIsAtTop] =  useState(false);
    const handleChangeClick = () =>{
        setIsAtTop(!isAtTop);
    }
    const handleCloseClick = () =>{
        console.log('on close')
    }
    return(
        <div className='search'>
            <SearchBox onSearch={handleChangeClick} onClose={handleCloseClick}/>
        </div>
    );
}
export default Search 