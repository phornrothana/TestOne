import { Menu , X} from "lucide-react";
import logo from "../assets/logoPNG.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const links = [
    {
        label:"Home",
        path:"/"
    },
    {
        label:"Service",
        path:"service"
    },
    {
        label:"Accessories",
        path:"accessories"
    },
    {
        label:"About",
        path:"about"
    }
]


const Navbar = () => {


        const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <button onClick={()=>setIsOpen(!isOpen)} className="nav-toggle">
         {isOpen ? <X/> : <Menu/>}
        </button>
        <ul className={isOpen ? "nav-lists active" : "nav-lists"}>
        {links.map((link) => (
          <li onClick={()=>setIsOpen(false)} className="nav-link" key={link.label}>
           <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
        </ul>
     </nav>
  );
}

export default Navbar
