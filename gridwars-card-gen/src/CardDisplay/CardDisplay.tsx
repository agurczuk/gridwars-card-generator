import React from "react";
import {
  mdiPistol,
  mdiHeartMultipleOutline,
  mdiShieldOutline,
  mdiShoePrint,
  mdiFlare,
  mdiVolleyball,
  mdiBrain,
  mdiUsbFlashDriveOutline,
  mdiBoxingGlove,
  mdiDiceMultiple,
  mdiAccountAlert,
  mdiCogSync,
} from "@mdi/js";
import { Icon } from "@mdi/react";
import Columns, { Column } from "../Columns/Columns";

const characterTemplate = {
  name: "Takahashi",
  cost: 44,
  basicParameters: {
    health: 5,
    armor: 1,
    speed: 4,
    actions: 2,
  },
  parameters: [
    { icon: mdiHeartMultipleOutline, value: 5 }, //health
    { icon: mdiShieldOutline, value: 1 }, //armor
    { icon: mdiShoePrint, value: 4 }, //speed
    { icon: mdiFlare, value: 2 }, //actions
    { icon: mdiPistol, value: 4 }, //gun
    { icon: mdiDiceMultiple, value: 4 }, //special
    { icon: mdiBoxingGlove, value: 2 }, // hand
    { icon: mdiAccountAlert, value: 4 }, //body
    { icon: mdiUsbFlashDriveOutline, value: 7 }, //hack
    { icon: mdiCogSync, value: 6 }, //gears
    { icon: mdiBrain, value: 7 },
  ],
};

const iconSize = 0.75;

type TraitProps = {
  icon: string;
  value: number;
};

const Trait = (props: TraitProps) => {
  return (
    <div className="character-trait">
      <Icon path={props.icon} size={iconSize} />
      {"  "}
      {props.value}
    </div>
  );
};

const CardDisplay = () => {
  console.log("hello");

  const char = characterTemplate;

  return (
    <div className="box">
      <div className="card-box">
        <div className="character-name">
          <Columns>
            <Column className="is-four-fifths">{char.name}</Column>
            <Column>
              <span className="character-cost">{char.cost}</span>
            </Column>
          </Columns>
        </div>
        <Columns>
          <Column className="is-flex is-flex-wrap-wrap">
            {char.parameters.map((x) => {
              return <Trait value={x.value} icon={x.icon} />;
            })}
          </Column>
          <Column>
            <figure className="image is-128x128">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
          </Column>
        </Columns>
      </div>
      {/* <Icon path={mdiSword} title="User Profile" size={1} /> */}
    </div>
  );
};

export default CardDisplay;
