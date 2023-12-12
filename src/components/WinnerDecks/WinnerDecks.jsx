import { useEffect, useState } from 'react';
import Deck from '../Deck/Deck.jsx';
import db from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore'
import './WinnerDecks.css'


export default function WinnerDecks() {
    const [winningDecks, setWinningDecks] = useState([])
    const [visibilityArray, setVisibilityArray] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, 'winningDecks');
        const getDecks = async () => {
            try {
                const data = await getDocs(collectionRef);
                const decks = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setWinningDecks(decks); // Setting the state with fetched data
                // Initialize visibilityArray here
                setVisibilityArray(decks[0]?.week.map(() => false)); // Safe check with '?'
            } catch (error) {
                console.error("error fetching data : ", error)
            }
        };
        
        getDecks()        
    }, []); 

    const toggleVisibility = index => {
        const newVisibility = [...visibilityArray];
        newVisibility[index] = !newVisibility[index];
        setVisibilityArray(newVisibility);
    };
    
    const deckList = winningDecks[0]?.week.map((deck, index) => {
        return (
            <div key={index} className='winner-week-container'>
                <button className='winner-week-button' onClick={() => toggleVisibility(index)}>
                    Show Week {index + 1} Winning Deck
                </button>
                {visibilityArray[index] && (
                    <Deck 
                        week={index}
                        url={deck.deckURL}
                        deckImage={deck.deckImage} 
                    />
                )}
            </div>            
        )
    });
        
    return (
        <div className='winnerDeck-container'>
            {deckList}
        </div>
    )
}