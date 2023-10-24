import "./sidebar.scss"
import {Home, Timeline,TrendingUp} from '@mui/icons-material';
const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="dbMenu">
        <h3>USERS</h3>
        <ul className="dbList">
            <li className={props.getActive==="AddProduct"?"dbListItem active":"dbListItem"} id="AddProduct  " onClick={e=>props.setActive(e.target.id)}>
                <Home/>Add Product
            </li>
            <li className={props.getActive==="Stats"?"dbListItem active":"dbListItem"} id="Stats" onClick={e=>props.setActive(e.target.id)}>
                <Timeline/>Stats
            </li>
            <li className={props.getActive==="Sales"?"dbListItem active":"dbListItem"} id="Sales" onClick={e=>props.setActive(e.target.id)}>
                <TrendingUp/>Sales
            </li>
        </ul>
        <h3>PRODUCTS</h3>
        <ul className="dbList">
            <li className={props.getActive==="Products"?"dbListItem active":"dbListItem"} id="Products" onClick={e=>props.setActive(e.target.id)}>
                <Home/>Products
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar
