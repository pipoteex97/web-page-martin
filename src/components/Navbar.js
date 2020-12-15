import React, { useEffect, useState } from 'react'
import { Link} from "react-router-dom";
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from './Button'
import "./navbar.css"
import { IconContext } from 'react-icons/lib'


export const Navbar = () => {
    const [click, setclick] = useState(false);
    const [button, setbutton] = useState(true);
    const handleClick = () =>{
        setclick(!click);
    }
    const closeMobileMenu = () =>{
        setclick(false);
    }
    
    const showButton = () =>{
        if(window.innerWidth <=660){
            setbutton(false);
        }else{
            setbutton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    console.log("Este es el click ",JSON.stringify(click));
    console.log("Este es el boton ",JSON.stringify(button));
    window.addEventListener("resize", showButton);
    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <MdFingerprint className="navbar-icon"/>
                        Martin Martinez
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Productos
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? 
                                (
                                    <Link to="/sing-up" className="btn-link">
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">INGRESAR</Button>
                                    </Link>
                                ) :
                                (
                                    <Link to="/sing-up" className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">INGRESAR</Button>
                                    </Link>
                                )

                            }
                        </li>
                    </ul>
                    
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}
