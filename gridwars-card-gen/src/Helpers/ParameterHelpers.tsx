import {
  mdiBoxingGlove,
  mdiBrain,
  mdiChevronTripleUp,
  mdiCogSyncOutline,
  mdiHeartMultipleOutline,
  mdiPistol,
  mdiShieldAccountOutline,
  mdiShieldOutline,
  mdiShoePrint,
  mdiUsbPort,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import RifleIcon from "../Components/RifleIcon";
import { CharacterParameterType } from "../Data/Characters";

const getParameterIcon = (
  param: CharacterParameterType,
  size?: number
): React.ReactNode => {
  const getIcon = (path: string) => {
    return <Icon path={path} size={size || 1} />;
  };

  switch (param) {
    case CharacterParameterType.health:
      return getIcon(mdiHeartMultipleOutline);
    case CharacterParameterType.shield:
      return getIcon(mdiShieldOutline);
    case CharacterParameterType.gun:
      return getIcon(mdiPistol);
    case CharacterParameterType.rifle:
      return <RifleIcon />;
    case CharacterParameterType.hand:
      return getIcon(mdiBoxingGlove);
    case CharacterParameterType.hack:
      return getIcon(mdiUsbPort);
    case CharacterParameterType.body:
      return getIcon(mdiShieldAccountOutline);
    case CharacterParameterType.brain:
      return getIcon(mdiBrain);
    case CharacterParameterType.engineer:
      return getIcon(mdiCogSyncOutline);
    case CharacterParameterType.speed:
      return getIcon(mdiShoePrint);
    case CharacterParameterType.actions:
      return getIcon(mdiChevronTripleUp);
    default:
      return "";
  }
};

export { getParameterIcon };
