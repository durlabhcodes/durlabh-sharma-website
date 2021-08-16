import React from "react"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className = "navbar">
            <div className = "navbar-logo">Durlabh Sharma</div>
            <div className = "navbar-links">
                <a href="/#" className = "navbar-link navbar-link-about">
                    About
                </a>
                <a href="/#"  className = "navbar-link navbar-link-blog">
                    Blog
                </a>
                {/* <a href="/#"  className = "navbar-link-contact">
                    Contact Me
                </a> */}
            </div>
        </div>
    )
}