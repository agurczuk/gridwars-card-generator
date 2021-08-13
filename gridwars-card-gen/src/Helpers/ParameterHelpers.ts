import { mdiHeartMultipleOutline } from "@mdi/js";
import { CharacterParameterType } from "../Data/Characters";

const getParameterIcon = (param: CharacterParameterType): string => {
  switch (param) {
    case CharacterParameterType.health:
      return mdiHeartMultipleOutline;
    default:
      return "";
  }
};

export { getParameterIcon };
