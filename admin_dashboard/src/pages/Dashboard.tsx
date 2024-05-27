import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import userImg from "../assets/user.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";



const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard">

        {/* Bar */}
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, users & docs" />
          <FaRegBell/>
          <img src={userImg} alt="User" />
        </div>

        {/* WidgetContainer */}
        <section className="widgetContainer">
            <WidgetItem percent={56} amount={true} value={34000} heading="Revenue" color="rgb(110 115 255)"/>
            <WidgetItem percent={-14}  value={400} heading="Users" color="rgb(0 198 202)"/>
            <WidgetItem percent={80}  value={23000} heading="Transections" color="rgb(255 196 0)"/>
            <WidgetItem percent={30}  value={1000} heading="Products" color="rgb(76 0 265)"/>
        </section>

        {/* GraphContainer */}
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transection</h2>
            {/* Graph here */}
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {
                data.categories.map((i)=>(
                  <CategoryItem key={i.heading} heading={i.heading} value={i.value} color={`hsl(${i.value},${i.value}%, 50%)`}/>
                ))
              }
            </div>
          </div>
        </section>


      </main>
    </div>
  )
}

interface WidgetItemProps {
  heading : string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({heading, value, percent, color, amount=false}: WidgetItemProps)=> (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {
        percent > 0 
                  ? (<span className="green"> 
                      <HiTrendingUp/> + {percent}%{" "}
                  </span>)
                  : (<span className="red">
                      <HiTrendingDown/> {percent}%{" "}
                  </span>)
      }
    </div>

    <div 
      className="widgetCircle" 
      style={{
        background: `conic-gradient(
          ${color} ${(Math.abs(percent)/100)*360}deg, 
          rgb(255, 255, 255) 0)`
      }}
    >
      <span 
        style={{
          color,
        }}
      >{percent}%</span>
    </div>
  </article>
)

interface CategoryItemProps{
  color: string;
  value: number;
  heading: string;
}
const CategoryItem = ({color, value, heading}: CategoryItemProps) => (
  <div className="category_item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor: color,
        width: `${value}%`,
      }}>
      </div>
    </div>
    <span>{value}%</span>
  </div>
)

export default Dashboard