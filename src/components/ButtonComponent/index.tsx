import "./styles.css";
 type ButtonComponentProps = {
  title:string;
  onClick: any
 }

function ButtonComponent(props: ButtonComponentProps) {
  return (
    <div>
      <button onClick={props.onClick} className="button">{props.title}</button>
    </div>
  );
}

export default ButtonComponent;
