

import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header className="s-header">

        <div className="header-logo">
            <Link className="logo" href="/">
                <img src={require("../assets/logo/logo.png")} alt="logo" />
            </Link>
        </div>

        <nav className="header-nav-wrap">
            <ul className="header-nav">
                <li className="current"><Link href="index.html" title="Home">Home</Link></li>
                <li><Link href="/about" title="About">About</Link></li>
                <li><Link href="/events" title="Services">Events</Link></li>
                <li><Link href="/contact" title="Contact us">Contact</Link></li>	
            </ul>
        </nav>

        <Link className="header-menu-toggle" href="#0"><span>Menu</span></Link>

    </header>
    )
}