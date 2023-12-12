import { useEffect, useState } from 'react'
import db from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore'

import './Leaderboard.css'

export default function Leaderboard() {
    const [gamePointRanks, setGamePointRanks] = useState([])
    const [leaguePointRanks, setleaguePointRanks] = useState([])
    const [leaders, setLeaders] = useState([])
    
    useEffect(() => {
        const collectionRef = collection(db, 'users');
        const getUsers = async () => {
            try {
                const data = await getDocs(collectionRef);
                const users = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setLeaders(users);                
            } catch (error) {
                console.error("error fetching data : ", error)
            }
        };
        
        getUsers()        
    }, []);

    // useEffect to set gamePointRanks
    useEffect(() => {
        const rankedLeaders = leaders
            .map(leader => {
                // Calculate points
                const gamesPlayed = leader.matchRecord.win + leader.matchRecord.loss + leader.matchRecord.draw;
                const points = leader.matchRecord.win * 2 + leader.matchRecord.draw;
                return { ...leader, points, gamesPlayed };
            })
            .sort((a, b) => b.points - a.points) // Sort by points, descending
            .map((leader, index) => ({ ...leader, rank: index + 1 })); // Assign rank
        
        const leaguePointLeaders = leaders
            .sort((a, b) => b.leaguePoints - a.leaguePoints)
            .map((leader, index) => ({ ...leader, rank: index + 1 }))

        setGamePointRanks(rankedLeaders);
        setleaguePointRanks(leaguePointLeaders)
    }, [leaders]); // Dependency on 'leaders'

    return (
        <>        
            <div className="leaderBoard-standings">
                <table className="leaderBoard-table">
                    <caption className="leaderBoard-table-caption" >League Point Leaders</caption>
                    <thead className="leaderBoard-table-header">
                        <tr>
                            <th>NAME</th>
                            <th>League Points</th>
                        </tr>
                    </thead>
                    <tbody className="leaderBoard-table-body" >
                        <tr>
                            <td>{leaguePointRanks[0].name}</td>
                            <td className="leaderBoard-table-points">{leaguePointRanks[0].leaguePoints}</td>
                        </tr>
                        <tr>
                            <td>{leaguePointRanks[1].name}</td>
                            <td className="leaderBoard-table-points">{leaguePointRanks[1].leaguePoints}</td>
                        </tr>
                        <tr>
                            <td>{leaguePointRanks[2].name}</td>
                            <td className="leaderBoard-table-points">{leaguePointRanks[2].leaguePoints}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="game-standings">
                <table className="game-table">
                    <caption className="game-table-caption" >Game Point Leaders</caption>
                    <thead className="game-table-header">
                        <tr>
                            <th>NAME</th>
                            <th>W/L/D</th>
                            <th>POINTS</th>
                            <th>WIN %</th>
                        </tr>
                    </thead>
                    <tbody className="game-table-body" >
                        <tr>
                            <td>{gamePointRanks[0].name}</td>
                            <td className="game-table-points">{gamePointRanks[0].matchRecord.win} / {gamePointRanks[0].matchRecord.loss} / {gamePointRanks[0].matchRecord.draw}</td>
                            <td className="game-table-points">{gamePointRanks[0].points}</td>
                            <td className="game-table-points">{(gamePointRanks[0].matchRecord.win / gamePointRanks[0].gamesPlayed) * 100}</td>
                        </tr>
                        <tr>
                            <td>{gamePointRanks[1].name}</td>
                            <td className="game-table-points">{gamePointRanks[1].matchRecord.win} / {gamePointRanks[1].matchRecord.loss} / {gamePointRanks[1].matchRecord.draw}</td>
                            <td className="game-table-points">{gamePointRanks[1].points}</td>
                            <td className="game-table-points">{(gamePointRanks[1].matchRecord.win / gamePointRanks[1].gamesPlayed) * 100}</td>
                        </tr>
                        <tr>
                            <td>{gamePointRanks[2].name}</td>
                            <td className="game-table-points">{gamePointRanks[2].matchRecord.win} / {gamePointRanks[2].matchRecord.loss} / {gamePointRanks[2].matchRecord.draw}</td>
                            <td className="game-table-points">{gamePointRanks[2].points}</td>
                            <td className="game-table-points">{(gamePointRanks[2].matchRecord.win / gamePointRanks[2].gamesPlayed) * 100}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}