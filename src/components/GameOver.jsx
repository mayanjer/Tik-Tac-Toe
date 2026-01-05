export default function GameOver({ winner, onRematch}) {
    
    let result = (winner != undefined) ? <p>{winner} won!</p>: <p>Its a Draw</p>
        
    
    return <div id="game-over">
        <h2>GAME OVER</h2>
        {result}
        

        <button onClick = {onRematch}>Rematch</button>

    </div>
}