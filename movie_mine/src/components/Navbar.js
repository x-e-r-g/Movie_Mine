import React from 'react'

const Navbar = ()=>{
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo" style={{marginLeft: 30}}>Movie Mine</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">About</a></li>
                        <li><a href="badges.html">Popular</a></li>
                        <li><a href="collapsible.html" style={{ marginRight: 30 }}>Profile</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;