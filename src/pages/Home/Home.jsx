import NavBar from "../../components/NavBar/NavBar"
import "./Home.css"
import Leaderboard from "../../components/Leaderboard/Leaderboard"
//<SimpleSlider />

export default function Home() {
    //<Leaderboard leaderNum={3}/>
    return (
        <div className="home-container" >
            <div className="home-title-container">
                <h1 className="home-title-left">OMG Games </h1>
                <h1 className="home-title-right">Disney Lorcana</h1>
            </div>
            <div className="home-info-container">
                <Leaderboard leaderNum={3}/>
            </div>
        </div>
    )
}