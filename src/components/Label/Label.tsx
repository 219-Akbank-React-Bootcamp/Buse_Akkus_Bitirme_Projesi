import React, {FC} from "react";
import { X } from "react-feather";

import { LabelProps } from "./Label.types";

const Label : FC<LabelProps> = (props) => {
    const { item, removeLabel } = props;
    return (
      <label style={{ backgroundColor: item.color, color: "#fff" }}>
        {item.text}
        {removeLabel && <X onClick={() => removeLabel(item)} />}
      </label>
    );
  }

export default Label
