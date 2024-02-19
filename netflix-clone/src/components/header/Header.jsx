import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Header.css"
import Logo from "../../images/Logo.png"
const Header = () => {
  return (
    <div className="container">
      <div className='header_container'>
              <div className='left-navbar'>
                  <ul>
                      <li><img src={Logo} alt="Netflix Logo" width="100" /></li> 
                      <li>Netflix</li>
                      <li>Home</li>
                      <li>TVShows</li>
                      <li>Movies</li>
                      <li>Latest</li>
                      <li>MyList</li>
                      <li>Browse by Languages</li>
                  </ul>
              </div>
              <div className='right-navnar'>
                  <ul>
                      <li><SearchIcon /></li>
                      <li><NotificationsNoneIcon /></li>
                      <li><AccountBoxIcon /></li>
                      <li><ArrowDropDownIcon /></li>
                  </ul>
              </div>
          </div> 
    </div>
  )
}

export default Header
