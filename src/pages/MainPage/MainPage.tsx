import CounterComponent from "../../components/CounterComponent";
import "./styles.css";
import PlayViewerComponent from "../../components/PlayViewerComponent";
import ButtonComponent from "../../components/ButtonComponent";
import appState from "../../store/index";
import { useRecoilState } from "recoil";
import { getBetSum, onPlay } from "./logic";
import { SINGLE_SELECTION_WIN, TWO_SELECTION_WINS } from "../../constants";

function MainPage() {
  const [state, setState] = useRecoilState(appState);

  const onPlayClick = () => {
    if (state.playerSelection.length === 0) {
      return
    }
    
    const values = onPlay(state.playerSelection);
    const playerWon = values.result.includes(1)
    let amountBetWon = 0
    if (playerWon) {
      const betSum = getBetSum(state.currentBet)
    
      if (state.playerSelection.length === 1) {
        // Only one bet was done. Return 14 times the bet.
        amountBetWon = SINGLE_SELECTION_WIN * betSum
      }

      if (state.playerSelection.length === 2) {
        // Only one bet was done. Return 3 times the bet.
        amountBetWon = TWO_SELECTION_WINS * betSum
      }
    }
    setState({
      ...state,
      balance: state.balance + amountBetWon,
      computerSelection: values.computerSelection,
      isTie: !values.result.includes(1) && !values.result.includes(-1),
      playStarted: true,
      playerWon,
      playerWonCount: Math.max(...values.result) === 1 ? state.playerWonCount + 1 : state.playerWonCount,
      winningSelection: values.winningSelection
    });
  };

  return (
    <div className="mainPageLayout">
      <div>
        <CounterComponent
          balance={state.balance}
          bet={getBetSum(state.currentBet)}
          win={state.playerWonCount}
        ></CounterComponent>
      </div>
      <div className="playViewer">
        <PlayViewerComponent
          playerSelection={state.playerSelection}
          computerSelection={state.computerSelection}
          playerWon={state.playerWon}
          isTie={state.isTie}
        ></PlayViewerComponent>
      </div>
      <div className="buttons">
        {!state.playStarted && (
          <ButtonComponent
            onClick={onPlayClick}
            title={"Play"}
          ></ButtonComponent>
        )}
        {state.playStarted && (
          <ButtonComponent
            onClick={() => {
              setState({
                ...state,
                computerSelection: "",
                playerSelection: [],
                playStarted: false,
                playerWon: false,
                isTie: false,
                currentBet: {
                  'Rock': 0,
                  'Paper': 0,
                  'Scissors': 0 
                },
                winningSelection: ''
              });
            }}
            title={"Clear"}
          ></ButtonComponent>
        )}
      </div>
    </div>
  );
}

export default MainPage;
