export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
    }

    return(
        <div className="dice-box" style={styles} onClick={props.holdDice}>
            <h2>{props.value}</h2>
        </div>
    )
}