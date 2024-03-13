import "../styles/sidebar.css";
//import logo from "../img/prime-logo.png";
import { FaCog, FaUser, FaSignOutAlt, FaUserAlt, FaRupeeSign } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoRestaurant } from "react-icons/io5";
import { IoIosHelpCircle, IoMdInformationCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from "../context/logincontext";



function SideBar() {
  const{setLogin}=useLogin();
  const nav=useNavigate();
  
  const handllogout=()=>{
    setLogin(false);
    nav("/login");
  }
  return (
    <header>
      <img src={"./img/LOGO.png"} alt="logo" />

      <div className="top-menu">
        <div className="side-icon"><Link to="/"><MdDashboard title="Order" /></Link></div>
        <div className="side-icon"><Link to="/register"><FaUserAlt title="Chat with sales rep"/></Link></div>
        <div className="side-icon"><Link to="/payment"><FaRupeeSign title="Chat with sales rep"/></Link></div>
        {/* <div className="side-icon"><Link to="/comingsoon"><IoRestaurant title="Book a seat"/></Link></div> */}
        {/* <div className="side-icon"><Link to="/help"><IoIosHelpCircle title="FAQs"/></Link></div>
        <div className="side-icon"><Link to="/about"><IoMdInformationCircle title="About"/></Link></div>
        <div className="side-icon"><Link to="/profile"><FaUser title="Your Profile"/></Link></div>
        <div className="side-icon"><Link to="/settings"><FaCog title="Settings"/></Link></div> */}
      </div>

      <div className="bottom-menu text-brandColor text-2xl">
        <FaSignOutAlt onClick={handllogout} title="Logout"/>
      </div>

    </header>
  );
}

export default SideBar;
