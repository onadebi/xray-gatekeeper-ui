import './NavBar.scss'
import logo from '../../../statics/logo.svg';



const NavBar = () => {
  return (
    <>
    <div className="navbar">
        <i className="logo">
            <img src={logo} alt="JD Power logo" />
        </i>
    </div>
    </>
  )
}

export default NavBar;