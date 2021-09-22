import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css"
import "../App.css"
function Navbar(){
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const showMobileMenu=()=>{
        if (window.innerWidth<=960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>BareAI
                        <i className="fas fa-robot"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click?'nav-menu active':'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Servies
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;