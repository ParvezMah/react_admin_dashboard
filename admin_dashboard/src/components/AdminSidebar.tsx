import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Line } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";



interface LiProps {
    url : string;
    text: string;
    location: Location;
    Icon : IconType;
}

const Li = ({text,location, url, Icon}: LiProps)=> (
    <li>
        <Link to={url}>
            <Icon/>
            {text}
        </Link>
    </li>
)


const AdminSidebar = () => {

    const location = useLocation();

  return (
    <aside>
        <h2>Logo.</h2>
        <div>
            <h5>Dashboard</h5>
            <ul>
                <li>
                    <Li 
                        url="/admin/dashboard" 
                        text="Dashboard" 
                        Icon={RiDashboardFill} 
                        location={location} 
                    />
                </li>
                <li>
                    <Li 
                        url="/admin/products" 
                        text="Products" 
                        Icon={RiShoppingBag3Line} 
                        location={location} 
                    />
                </li>
                <li>
                    <Li 
                        url="/admin/customers" 
                        text="Customers" 
                        Icon={IoIosPeople} 
                        location={location} 
                    />
                </li>
                <li>
                    <Li 
                        url="/admin/transection" 
                        text="Transections" 
                        Icon={AiFillFileText} 
                        location={location} 
                    />
                </li>
            </ul>
        </div>
    </aside>
  )
}



export default AdminSidebar