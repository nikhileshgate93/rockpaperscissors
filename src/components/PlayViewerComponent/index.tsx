import Card from "./Card";
import "./styles.css";
import ResultSection from "./ResultSection";
type PlayViewerComponentPropsType = {
  playerSelection: string[];
  computerSelection: string;
  playerWon: boolean;
  isTie: boolean;
};

function PlayViewerComponent(props: PlayViewerComponentPropsType) {
  return (
    <>
      <ResultSection
        playerWon={props.playerWon}
        playerSelection={props.playerSelection}
      ></ResultSection>
      <p className="textColor">PICK YOUR POSITIONS</p>
      <div className="cardList">
        <Card title="Rock"></Card>
        <Card title="Paper"></Card>
        <Card title="Scissors"></Card>
      </div>
    </>
  );
}

export default PlayViewerComponent;
