import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Line } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";



interface LiProps {
    url : string;
    text: string;
    location: Location;
    Icon : IconType;
}

const Li = ({text,location, url, Icon}: LiProps)=> (
    <li style={{
        backgroundColor: location.pathname.includes(url) 
            ? "rgba(0,115,255,0.1" 
            : "white", 
    }}>
        <Link 
            to={url} 
            style={{
                color: location.pathname.includes(url)
                    ? "rgba(0,115,255,1"
                    : "black"
            }}>
                <Icon/>
                {text}
        </Link>
    </li>
)


const DivOne = ({location}:{location:Location})=>(
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
)

const DivTwo = ({location}:{location:Location}) => (
    <div>
    <h5>Charts</h5>
    <ul>
        <li>
            <Li 
                url="/admin/chart/bar" 
                text="Bar" 
                Icon={FaChartBar} 
                location={location} 
            />
        </li>
        <li>
            <Li 
                url="/admin/chart/pie" 
                text="Pie" 
                Icon={FaChartPie} 
                location={location} 
            />
        </li>
        <li>
            <Li 
                url="/admin/chart/line" 
                text="Line" 
                Icon={FaChartLine} 
                location={location} 
            />
        </li>
    </ul>
</div>
)

const DivThree = ({location}:{location:Location}) => (
    <div>
        <h5>APPS</h5>
        <ul>
            <li>
                <Li 
                    url="/admin/stopwatch" 
                    text="StopWatch" 
                    Icon={FaStopwatch} 
                    location={location} 
                />
            </li>
            <li>
                <Li 
                    url="/admin/coupon" 
                    text="Coupon" 
                    Icon={RiCoupon3Fill} 
                    location={location} 
                />
            </li>
            <li>
                <Li 
                    url="/admin/toss" 
                    text="Toss" 
                    Icon={FaGamepad} 
                    location={location} 
                />
            </li>
        </ul>
</div>
)

const AdminSidebar = () => {

    const location = useLocation();

  return (
    <aside>
        <h2>Logo.</h2>

        <DivOne location={location}/>
        <DivTwo location={location}/>
        <DivThree location={location}/>



    </aside>
  )
}



export default AdminSidebar


















































// import { IconType } from "react-icons";
// import { AiFillFileText } from "react-icons/ai";
// import { IoIosPeople } from "react-icons/io";
// import { RiDashboardFill, RiShoppingBag3Line } from "react-icons/ri";
// import { Link, Location, useLocation } from "react-router-dom";



// interface LiProps {
//     url : string;
//     text: string;
//     location: Location;
//     Icon : IconType;
// }

// const Li = ({text,location, url, Icon}: LiProps)=> (
//     <li>
//         <Link to={url}>
//             <Icon/>
//             {text}
//         </Link>
//     </li>
// )


// const AdminSidebar = () => {

//     const location = useLocation();

//   return (
//     <aside>
//         <h2>Logo.</h2>
//         <div>
//             <h5>Dashboard</h5>
//             <ul>
//                 <li style={{
//                         backgroundColor: location.pathname.includes("/admin/dashboard") 
//                             ? "rgba(0,115,255,0.1" 
//                             : "white", 
//                     }}>
//                     <Li 
//                         url="/admin/dashboard" 
//                         text="Dashboard" 
//                         Icon={RiDashboardFill} 
//                         location={location} 
//                     />
//                 </li>
//                 <li style={{
//                         backgroundColor: location.pathname.includes("/admin/products") 
//                             ? "rgba(0,115,255,0.1" 
//                             : "white", 
//                     }}>
//                     <Li 
//                         url="/admin/products" 
//                         text="Products" 
//                         Icon={RiShoppingBag3Line} 
//                         location={location} 
//                     />
//                 </li>
//                 <li style={{
//                         backgroundColor: location.pathname.includes("/admin/customers") 
//                             ? "rgba(0,115,255,0.1" 
//                             : "white", 
//                     }}>
//                     <Li 
//                         url="/admin/customers" 
//                         text="Customers" 
//                         Icon={IoIosPeople} 
//                         location={location} 
//                     />
//                 </li>
//                 <li style={{
//                         backgroundColor: location.pathname.includes("/admin/transection") 
//                             ? "rgba(0,115,255,0.1" 
//                             : "white", 
//                     }}>
//                     <Li 
//                         url="/admin/transection" 
//                         text="Transections" 
//                         Icon={AiFillFileText} 
//                         location={location} 
//                     />
//                 </li>
//             </ul>
//         </div>
//     </aside>
//   )
// }



// export default AdminSidebar