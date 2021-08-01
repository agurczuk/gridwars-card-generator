import React from "react";

type Props = {
  value: string | number | null | undefined;
  onChange: (val: string | number | null) => void;
  label?: string;
};

const Textbox = (props: Props) => {
  const handleChange = (e: any) => {
    const val = e.target.value;
    props.onChange(val);
  };

  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          value={props.value ?? ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Textbox;
