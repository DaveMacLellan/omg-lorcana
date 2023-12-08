import NavBar from "../../components/NavBar/NavBar"
import SimpleSlider from "../../components/Carousel/Carousel"
import "./Home.css"
import testWP from '../../assets/images/DisneyLorcanaWP.png'
//<SimpleSlider />
export default function HomePage() {
    return (
        <div style={{
            backgroundImage: `url(${testWP})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            height: "100vh",
            width: "100vw"
            }}>
            <NavBar />
            <div className="home-container">
                <div className="home-title-container">
                    <h1 className="home-title">OMG Games Disney Lorcana League</h1>
                </div>
                <div className="home-info-container">
                    <div className="home-info-league-standings">
                        <table className="home-info-league-standings-table">
                            <caption className="home-info-league-standings-table-caption" >League Point Leaders</caption>
                            <thead className="home-info-league-standings-table-header">
                                <tr>
                                    <th>NAME</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>
                            <tbody className="home-info-league-standings-table-body" >
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">10</td>
                                </tr>
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">10</td>
                                </tr>
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">10</td>
                                </tr>
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="home-info-game-standings">
                        <table className="game-standings-table">
                            <caption className="game-standings-table-caption" >Game Point Leaders</caption>
                            <thead className="game-standings-table-header">
                                <tr>
                                    <th>NAME</th>
                                    <th>W/L/D</th>
                                    <th>POINTS</th>
                                    <th>WIN %</th>
                                </tr>
                            </thead>
                            <tbody className="game-standings-table-body" >
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">4/1/2</td>
                                    <td className="table-points">10</td>
                                    <td className="table-points">57%</td>
                                </tr>
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">4/1/2</td>
                                    <td className="table-points">10</td>
                                    <td className="table-points">57%</td>
                                </tr>
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">4/1/2</td>
                                    <td className="table-points">10</td>
                                    <td className="table-points">57%</td>
                                </tr>
                                <tr>
                                    <td>Dave</td>
                                    <td className="table-points">4/1/2</td>
                                    <td className="table-points">10</td>
                                    <td className="table-points">57%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}