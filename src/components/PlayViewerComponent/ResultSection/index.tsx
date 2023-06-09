import { useRecoilState } from "recoil";
import appState from "../../../store";
import { getBetSum } from "../../../pages/MainPage/logic";
import { SINGLE_SELECTION_WIN, TWO_SELECTION_WINS } from "../../../constants";
import './styles.css'

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
        <span className="span-font whiteText">{state.computerSelection+' '}</span>
        <span className="textColor">VS</span>
        <span className="span-font whiteText"> {state.playerSelection.join(",")} </span>
        {props.playerWon && (
          <div>
            <p className="textColor">{`${state.winningSelection.toUpperCase()} WON!`}</p>
            <p className="whiteText span-font">
              YOU WIN! $
              {getBetSum(state.currentBet) *
                (state.playerSelection.length === 1
                  ? SINGLE_SELECTION_WIN
                  : TWO_SELECTION_WINS)}
            </p>
          </div>
        )}
        {state.playStarted && !props.playerWon && (
          <div>
            {props.isTie && <p className="whiteText">IT'S A TIE!</p>}
            <p className="textColor">{`${props.playerSelection
              .join()
              .toUpperCase()} LOST!`}</p>
            <p className="whiteText span-font">
              
              YOU LOST! {getBetSum(state.currentBet)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultSection;
