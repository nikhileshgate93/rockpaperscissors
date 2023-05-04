import { useRecoilState } from "recoil";
import appState from "../../../store";
import "./styles.css";
import { useState } from "react";

type CardProps = {
  title: string;
};

function Card(props: CardProps) {
  const [state, setState] = useRecoilState(appState);
  const [selected, setSelected] = useState(false);
  let cardBet =
    props.title === "Rock"
      ? state.currentBet["Rock"]
      : props.title === "Scissors"
      ? state.currentBet["Scissors"]
      : state.currentBet["Paper"];
  const onCardClick = () => {
    if (state.playStarted) {
      return;
    }

    if (
      new Set(state.playerSelection).size >= 2 &&
      !state.playerSelection.includes(props.title)
    ) {
      return;
    }

    if (state.balance < 500) {
      return;
    }
    setSelected(!selected);

    setState({
      ...state,
      currentBet: { ...state.currentBet, [props.title]: cardBet + 500 },
      balance: state.balance - 500,
      playerSelection: !state.playerSelection.includes(props.title)
        ? [...state.playerSelection, props.title]
        : state.playerSelection,
    });
  };

  return (
    <div
      className={"card".concat(` ${props.title}`)}
      style={{
        borderWidth: state.playerSelection.includes(props.title)
          ? "5px"
          : "2px",
      }}
      onClick={onCardClick}
    >
      <div
        className="bet"
        style={{
          visibility: cardBet > 0 ? "visible" : "hidden",
        }}
      >
        {cardBet}
      </div>
      <div style={{}}>{props.title}</div>
    </div>
  );
}

export default Card;
