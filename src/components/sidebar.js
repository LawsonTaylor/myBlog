import React from 'react'
import '../styles/sidebar.css'

const Sidebar = (props) => (
    <div
        className='sidebar'
    >
    <img src="../assets/me.jpg" alt="Avatar" 
    className="avatar"/>
    <div className="personal-info">
        <h1>Lawson</h1>
        <h3 className="ginger">Fullstack Developer</h3>
        <ul className="social-icons">
            <li><a href=""><img height="24" width="24" src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg" /></a></li>
            <li><a href=""><img height="24" width="24" src="https://unpkg.com/simple-icons@latest/icons/github.svg" /></a></li>
            <li> <a href=""><img height="24" width="24" src="https://unpkg.com/simple-icons@latest/icons/instagram.svg" /></a></li>
            <li> <a href=""><img height="24" width="24" src="https://unpkg.com/simple-icons@latest/icons/facebook.svg" /></a></li>
        </ul>
    </div>
    {props.description}
</div>
);

export default Sidebar;