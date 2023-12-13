import NavBar from '../../components/NavBar/NavBar'
import './WinningDecks.css'
import WinnerDecks from '../../components/WinnerDecks/WinnerDecks'


export default function WinningDecks() {

    return (
        <div className="winningDecks-container">
            <div className="winningDecks-title-container">
                <h1 className="winningDecks-title">Weekly Deck Winners</h1>
            </div>
            <div className="winningDecks-info-container">
                <WinnerDecks />
            </div>
        </div>
    )
}