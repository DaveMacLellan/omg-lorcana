import { Link } from "react-router-dom"
import omgLogo from "../../assets/images/omgLogo.png"
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="navBar-container">
            <div className="navBar-title-container">
                <img src={omgLogo} alt="OMG Logo"></img>
                <p>Disney Lorcana</p>                
            </div>
            <nav className="navBar-link-container">
                <Link className="link" to="/home" onClick={() => toggleMenu()}>Home</Link>                
                <Link className="link" to="/standings" onClick={() => toggleMenu()}>Standings</Link>               
                <Link className="link" to="/winnerdecks" onClick={() => toggleMenu()}>Winner Decks</Link>
            </nav>
        </div>
    )
}