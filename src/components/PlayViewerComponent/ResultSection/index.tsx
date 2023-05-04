import { useRecoilState } from "recoil";
import appState from "../../../store";
import { getBetSum } from "../../../pages/MainPage/logic";
import { SINGLE_SELECTION_WIN, TWO_SELECTION_WINS } from "../../../constants";
function ResultSection(props: any) {
  const [state] = useRecoilState(appState);
  
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
            <p className="whiteText"> YOU WIN! ${getBetSum(state.currentBet) * (state.playerSelection.length === 1? SINGLE_SELECTION_WIN: TWO_SELECTION_WINS)}</p>
          </div>
        )}
        {state.playStarted && !props.playerWon && (
          <div>
            {props.isTie && <p className="whiteText">IT'S A TIE!</p>}
            <p className="textColor">{`${props.playerSelection
              .join()
              .toUpperCase()} LOST!`}</p>
            <p className="whiteText"> YOU LOST! {getBetSum(state.currentBet)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultSection;
