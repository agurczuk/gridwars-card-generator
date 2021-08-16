import React from "react";
import Textbox from "../Components/Textbox";
import { CharacterParameterType } from "../Data/Characters";
import { getParameterIcon } from "../Helpers/ParameterHelpers";

type Props = {
  type: CharacterParameterType;
  value: string | null;
  onChange: (value: string) => void;
};

const CharacterParameter = (props: Props) => {
  return (
    <>
      {getParameterIcon(props.type, 1)}
      <Textbox value={props.value} onChange={(v) => props.onChange(v)} />
    </>
  );
};

export default CharacterParameter;
