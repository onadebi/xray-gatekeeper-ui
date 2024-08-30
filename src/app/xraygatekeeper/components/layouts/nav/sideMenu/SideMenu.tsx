import { Link } from 'react-router-dom'
import './SideMenu.scss'
import AppRoutes from '../../../../../../routes/AppRoutes'

const SideMenu = () => {
  return (
    <>
        <div className="sidebar">
            <ul>
                <li><Link to={AppRoutes().home.home}>Home</Link></li>
                <li><Link to={AppRoutes().home.home}>Upload report</Link></li>
            </ul>
        </div>
    </>
  )
}

export default SideMenu;