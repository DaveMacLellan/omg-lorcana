import { useEffect, useState } from 'react'
import db from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore'

import './Leaderboard.css'

export default function Leaderboard(props) {
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

    useEffect(() => {
        // Function to safely get match record values
        const getMatchValue = (value) => value || 0;
    
        //sorting league leaders
        const leaguePointLeaders = leaders
            .map(leader => {
                const win = getMatchValue(leader.matchRecord.win);
                const loss = getMatchValue(leader.matchRecord.loss);
                const draw = getMatchValue(leader.matchRecord.draw);
    
                // Calculate games played
                const gamesPlayed = win + loss + draw;

                return { ...leader, gamesPlayed };
            })
            .sort((a, b) => {
                // Primary sort by points
                if (b.leaguePoints !== a.leaguePoints) {
                    return b.leaguePoints - a.leaguePoints;
                }
                // Secondary sort by win percentage
                const winPercentageA = a.matchRecord.win / a.gamesPlayed;
                const winPercentageB = b.matchRecord.win / b.gamesPlayed;
                return Math.round(winPercentageB * 100) - Math.round(winPercentageA * 100);
            })
            .map((leader, index) => ({ ...leader, rank: index + 1 }));
    
            setleaguePointRanks(leaguePointLeaders);
    
        
    }, [leaders]);
    

    return (
        <>        
            <div className="leaderBoard-standings">
                {leaguePointRanks.length > 0 &&
                    <table className="leaderBoard-table">
                        <caption className="leaderBoard-table-caption" >{props.title}</caption>
                        <thead className="leaderBoard-table-header">
                            <tr>
                                <th>NAME</th>
                                <th>Points</th>
                                <th>W/L/D</th>
                                <th>WIN %</th>
                            </tr>
                        </thead>
                        <tbody className="leaderBoard-table-body" >
                            {leaguePointRanks.slice(0, props.leaderNum).map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td className="leaderBoard-table-points">{user.leaguePoints}</td>
                                    <td className="game-table-points">{user.matchRecord.win} / {user.matchRecord.loss} / {user.matchRecord.draw}</td>
                                    <td className="game-table-points">{Math.round((user.matchRecord.win / user.gamesPlayed) * 100)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>            
        </>
    )
}