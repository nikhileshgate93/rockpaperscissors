import './styles.css'

type CounterComponentPropsType = {
    balance:number;
    bet:number;
    win:number;
}
function CounterComponent(props:CounterComponentPropsType) {
    
    return <div className="counter">
        <div>
            Balance : <span className='whiteText'>{props.balance}</span>
        </div>
        <div>
            Bet : <span className='whiteText'>{props.bet}</span>
        </div>
        <div>
            Win : <span className='whiteText'>{props.win}</span>
        </div>
    </div>
}

export default CounterComponent