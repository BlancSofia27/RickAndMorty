import SearchBar from '../SearchBar/SearchBar';
import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './NavBar.Module.css';

const NavBar = (props) => {

const location = useLocation();

  return (
    
  <>
  {
    location.pathname !== `/` ?(
    <nav className='navBar'>    
      <div className='container'>
        <div>
          <SearchBar onSearch={props.onSearch} />
        </div> 
        <div className='boxButtons'>
            <button className='buttonHome'>
              <NavLink to='/home' className='deleteLine'>Home</NavLink>
            </button> 
            <button className='buttonNav'>
              <NavLink to='/about' className='deleteLine'>About</NavLink>
            </button>
            <button className='buttonNav'>
              <NavLink to='/favorites' className='deleteLine'>Favorites</NavLink>
            </button>
            <button className='buttonLogOut' onClick={()=>props.logout()}>Log Out</button>
            
        </div>  
      </div>

    </nav> ):null
  }
  </> 
  )
}

export default NavBar
