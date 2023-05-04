import { useRecoilState } from "recoil";
import appState from "../../../store";
import { getBetSum } from "../../../pages/MainPage/logic";
function ResultSection(props: any) {
  const [state] = useRecoilState(appState);
  const betSum = getBetSum(state.currentBet)
  return (
    <div
      className="resultSection"
      style={{
        visibility: state.playStarted ? "visible" : "hidden",
      }}
    >
      <div>
        <span className="whiteText"> {state.playerSelection.join(",")} </span>
        <span className="textColor">VS</span>
        <span className="whiteText">{' ' + state.computerSelection}</span>
        {props.playerWon && (
          <div className=''>
            <p className="textColor">{`${props.playerSelection
              .join()
              .toUpperCase()} WON!`}</p>
            <p className="whiteText"> YOU WIN! ${betSum}</p>
          </div>
        )}
        {state.playStarted && !props.playerWon && (
          <div>
            {props.isTie && <p className="whiteText">IT'S A TIE!</p>}
            <p className="textColor">{`${props.playerSelection
              .join()
              .toUpperCase()} LOST!`}</p>
            <p className="whiteText"> YOU LOST! {betSum}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultSection;
