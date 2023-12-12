import NavBar from "../../components/NavBar/NavBar"
import SimpleSlider from "../../components/Carousel/Carousel"
import "./Home.css"
import testWP from '../../assets/images/dlWP.png'
import Leaderboard from "../../components/Leaderboard/Leaderboard"
//<SimpleSlider />
export default function HomePage() {
    return (
        <div className="testImage" >            
            <div className="home-container" style={{
                backgroundImage: `url(${testWP})`,
                }}>
                <NavBar />
                <div className="home-title-container">
                    <h1 className="home-title-left">OMG Games </h1>
                    <h1 className="home-title-right">Disney Lorcana</h1>
                </div>
                <div className="home-info-container">
                    <Leaderboard />
                </div>
            </div>
        </div>
    )
}