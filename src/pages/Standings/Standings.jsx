import Leaderboard from '../../components/Leaderboard/Leaderboard'
import './Standings.css'

export default function Standings() {
    return (
        <div className="standings-container">
            <div className="standings-title-container">
                <h1 className="standings-title">Standings</h1>
            </div>
            <div className="standings-info-container">
                <Leaderboard title={"League Point Leaders"} leaderNum={20}/>
            </div>
        </div>
    )
}