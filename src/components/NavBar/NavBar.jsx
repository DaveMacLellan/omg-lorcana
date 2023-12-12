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
                    <ul className="navBar-ul">
                        <li>Standings</li>
                        <li>Weekly Report</li>
                        <li>Winner Decks</li>
                    </ul>
            </nav>
        </div>
    )
}