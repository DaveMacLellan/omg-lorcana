import NavBar from '../../components/NavBar/NavBar'
import './WinningDecks.css'
import testWP from '../../assets/images/dlWP2.webp'
import testWP2 from '../../assets/images/dlWP.png'
import WinnerDecks from '../../components/WinnerDecks/WinnerDecks'


export default function WinningDecks() {

    return (
        <div className="testImage" >            
            <div className="winningDecks-container" style={{
                backgroundImage: `url(${testWP2})`,
                }}>
                <NavBar />
                <div className="winningDecks-title-container">
                    <h1 className="winningDecks-title">Weekly Deck Winners</h1>
                </div>
                <div className="winningDecks-info-container">
                    <WinnerDecks />
                </div>
            </div>
        </div>
    )
}