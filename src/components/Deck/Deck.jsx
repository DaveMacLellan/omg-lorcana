import './Deck.css'

export default function Deck(props) {

    return(
        <div className="deck-container" onClick={() => openEvent(props.url)}>
            <a className='deck-url' href={props.url} target='_blank'><img className="deck-image" src={props.deckImage} alt="event action"/></a>
        </div>
    )
}