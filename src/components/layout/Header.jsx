import { Link } from "react-router-dom";
import { faHome,faAdd } from "@fortawesome/free-solid-svg-icons";
import Icon from "../smallComponents/Icon";

export default function Header(){
    return(
        <header className="bg-[#8EACCD] sticky top-0 z-50 py-5 w-full flex items-center justify-between px-24">
            <Link to='/add'><Icon name={faAdd} className='text-blue-700 hover:text-blue-900' size="2x"/></Link>
            <Link to='/'><Icon name={faHome} className='text-black hover:text-gray-700' size="2x"/></Link>
        </header>
    );
}