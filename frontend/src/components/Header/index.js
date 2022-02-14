import React from "react";
import Link from '@mui/material/Link';
import './style.css';
import {ReactComponent as LogoIcon} from '../../assets/person.svg';
import { FaSearch } from "react-icons/fa";
import { IconButton } from '@mui/material';


function Header() {
    return (
       <header >
        <section className="main-header">
        <Link href="http://localhost:3000/" underline="hover" className = "header-icon-logo" color="#515151">
                {<LogoIcon />}
            </Link>

            <div className="menu-links">
                BEL VEICULOS
            </div>

            <form className="search">
                <IconButton > <FaSearch color="#E2E8EB" className = "searchIcon" /> </IconButton >
                <input type="text" color="#E2E8EB" className="search-input" id="valor"></input>
            </form>
        </section>
       </header>
        
    );
}

export default Header;