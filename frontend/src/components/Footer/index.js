import React from 'react';
import Link from '@mui/material/Link';
import './style.css';

function date() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer className="main-footer">

            <div className="footer-icon-developer">
                Developed by 
                <Link 
                    href="" underline="hover" color="#515151"> Bruna Gomes, Erick Henrique e Lucas Cota
                </Link><br></br><br></br>
                
                Copyright © {date()}
            </div>
            
        </footer>
    );
}

export default Footer;