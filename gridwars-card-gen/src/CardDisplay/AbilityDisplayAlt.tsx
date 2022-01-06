import {
  mdiBoxingGlove,
  mdiBrightness7,
  mdiDiceMultipleOutline,
  mdiFireAlert,
  mdiFlare,
  mdiLightningBoltOutline,
  mdiPistol,
  mdiShieldRemove,
  mdiStarOutline,
} from "@mdi/js";
import { Icon } from "@mdi/react";
import React from "react";
import Columns, { Column } from "../Columns/Columns";
import RifleIcon from "../Components/RifleIcon";
import {
  WeaponOrAbility,
  WeponOrAbilityType,
} from "../Data/WeaponsAndAbilities";

type Props = {
  ability: WeaponOrAbility | null;
  isPL?: boolean;
  isAlt?: boolean;
};

const iconSize = 0.7;
const smallIconSize = 0.5;

const formatDescription = (s: string | undefined): string => {
  if (s) {
    let x = s.toLowerCase();
    x = x.replace(/([+0-9]+)/g, '<span class="num">$1</span>');
    x = x.replace(/^(handy)/g, '<span class="num">$1</span>');
    x = x.replace(/^(blink)/g, '<span class="num">$1</span>');
    return x;
  }
  return s ?? "";
};

const AbilityDisplayAlt = (props: Props) => {
  const showIcon =
    (props.ability && props.ability?.type === WeponOrAbilityType.attack) ||
    props.ability?.type === WeponOrAbilityType.gun ||
    props.ability?.type === WeponOrAbilityType.special;
  return (
    <>
      {props.ability && (
        <div className={props.isAlt ? "ability-box-alt" : "ability-box"}>
          <Columns
            className={
              props.isAlt
                ? "is-gapless ability-box-box-alt"
                : "is-gapless ability-box-box"
            }
          >
            {showIcon && (
              <Column className="is-1 border">
                {props.ability.type === WeponOrAbilityType.gun && (
                  <Icon path={mdiPistol} size={iconSize} />
                )}
                {props.ability.type === WeponOrAbilityType.attack && (
                  <Icon path={mdiBoxingGlove} size={iconSize} />
                )}
                {props.ability.type === WeponOrAbilityType.special && (
                  <RifleIcon width={20} />
                )}
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
              <div
                dangerouslySetInnerHTML={{
                  __html: props.isPL
                    ? props.ability.descriptionPL === "undefined"
                      ? ""
                      : formatDescription(props.ability.descriptionPL)
                    : props.ability.description === "undefined"
                    ? ""
                    : formatDescription(props.ability.description),
                }}
              ></div>
            </Column>
            {props.ability.special === true && (
              <Column className="is-1 border">
                <Icon path={mdiStarOutline} size={iconSize} />
              </Column>
            )}
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
          <div className={props.isAlt ? "margin-test-alt" : "margin-test"}>
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

export default AbilityDisplayAlt;
