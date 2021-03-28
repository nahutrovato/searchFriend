import SearchBox from './components/SearchBox/SearchBox'
import './styles.css'
const Search = () =>{
    const handleChangeClick = () =>{
        console.log('on search')
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