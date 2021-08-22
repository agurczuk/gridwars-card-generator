type Props = {
  onClick: () => void;
  label: string;
};

const Button = (props: Props) => (
  <button className="button" onClick={props.onClick}>
    {props.label}
  </button>
);

export default Button;
