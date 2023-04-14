import SearchBar from "../SearchBar";
import {Link } from 'react-router-dom';
import'./Nav.css'

const Nav = ({onSearch}) => {
    return(
        <nav className="nav">
            <SearchBar onSearch={onSearch}/>
            <button className="about">
                <Link to='/about'>ABOUT</Link>
            </button>
            
            <button className="home">
            <Link to='/home' >HOME</Link>
            </button>
        </nav>

    )
}

export default Nav;