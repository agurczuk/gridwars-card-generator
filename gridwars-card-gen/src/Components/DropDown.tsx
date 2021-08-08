import React from "react";

type Props = {
  values: Array<{ name: string; value: number }>;
  label?: string;
  onChange: (val: string) => void;
};

const DropDown = (props: Props) => {
  return (
    <>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="select">
          <select onChange={(x) => props.onChange(x.target.value)}>
            {props.values.map((v, ix) => (
              <option key={ix} value={v.value}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DropDown;
