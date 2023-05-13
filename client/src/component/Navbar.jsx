import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export const Navbar = () => {
    const [path, setPath] = useState("")

    return (
        <nav>
            <div className="link-container">
                <Link to="/" className={`link ${path == "" && 'active-link'}`} onClick={() => setPath("blog")}>Blog</Link>
                <Link to="/signup" className={`link ${path == "signup" && 'active-link'}`} onClick={() => setPath("signup")}>Sign Up</Link>
                <Link to="/login" className={`link ${path == "login" && 'active-link'}`} onClick={() => setPath("login")}>Log In</Link>
            </div>
        </nav>
    )
}
