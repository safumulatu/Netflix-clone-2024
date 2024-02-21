import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import profile from '../../images/10001.png'
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
                      {/* <li><AccountBoxIcon /></li> */}
                      <a href=""><img src={profile} width = "30px" height = 
                          "30px"alt="profile poto"/></a>
                      <li><ArrowDropDownIcon /></li>
                  </ul>
              </div>
          </div> 
    </div>
  )
}

export default Header
