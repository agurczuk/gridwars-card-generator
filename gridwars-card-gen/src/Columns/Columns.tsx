import React from "react";

type Props = {
  children:
    | Array<React.ReactNode>
    | React.ReactChild
    | React.ReactNode
    | string;
};
type ColumnProps = Props & { className?: string };

const Columns = (props: ColumnProps) => {
  const classes = ["columns", props.className].join(" ");
  return <div className={classes}>{props.children}</div>;
};

const Column = (props: ColumnProps) => {
  const classes = ["column", props.className].join(" ");
  return <div className={classes}>{props.children}</div>;
};

export { Column, Columns };
export default Columns;
