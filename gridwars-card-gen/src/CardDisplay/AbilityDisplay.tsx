import {
  mdiBrightness7,
  mdiDiceMultipleOutline,
  mdiFireAlert,
  mdiFlare,
  mdiLightningBoltOutline,
  mdiPistol,
  mdiShieldRemove,
} from "@mdi/js";
import { Icon } from "@mdi/react";
import React from "react";
import Columns, { Column } from "../Columns/Columns";
import {
  WeaponOrAbility,
  WeponOrAbilityType,
} from "../Data/WeaponsAndAbilities";

type Props = {
  ability: WeaponOrAbility | null;
  isPL?: boolean;
};

const iconSize = 0.7;
const smallIconSize = 0.5;

const AbilityDisplay = (props: Props) => {
  const showIcon =
    (props.ability && props.ability?.type === WeponOrAbilityType.attack) ||
    props.ability?.type === WeponOrAbilityType.gun ||
    props.ability?.type === WeponOrAbilityType.special;
  return (
    <>
      {props.ability && (
        <div className="ability-box">
          <Columns className="is-gapless ability-box-box">
            {showIcon && (
              <Column className="is-1 border">
                <Icon path={mdiPistol} size={iconSize} />
              </Column>
            )}
            {showIcon && (
              <Column className="is-1 border">
                <Icon path={mdiBrightness7} size={smallIconSize} />
                <br />
                {props.ability.statistic}
              </Column>
            )}
            <Column>
              {props.isPL
                ? props.ability.descriptionPL
                : props.ability.description}
            </Column>
            {props.ability.dice !== undefined && (
              <Column className="is-1 border">
                <Icon path={mdiDiceMultipleOutline} size={iconSize} />
                {props.ability.dice}
              </Column>
            )}
            {props.ability.shieldPiercing !== undefined && (
              <Column className="is-1 border">
                <Icon path={mdiShieldRemove} size={iconSize} />
                {props.ability.shieldPiercing}
              </Column>
            )}
            {props.ability.demage !== undefined && (
              <Column className="is-1 border">
                <Icon path={mdiFireAlert} size={iconSize} />
                {props.ability.demage}
              </Column>
            )}
            {props.ability.actions !== undefined && (
              <Column className="is-1 border">
                <Icon path={mdiFlare} size={iconSize} />
                {props.ability.actions}
              </Column>
            )}
            {props.ability.energy !== undefined && (
              <Column className="is-1 border">
                <Icon path={mdiLightningBoltOutline} size={iconSize} />
                {props.ability.energy}
              </Column>
            )}
          </Columns>
          <div className="margin-test">
            <>
              --- {props.isPL ? props.ability.namePL : props.ability.name} ---
            </>

            <div style={{ float: "right", width: "50px" }}>
              {props.ability.range && <>Range {props.ability.range}</>}
              {props.ability.type === WeponOrAbilityType.passive && (
                <>-- PASSIVE --</>
              )}
              {props.ability.type === WeponOrAbilityType.ability && (
                <>-- ABILITY --</>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AbilityDisplay;
