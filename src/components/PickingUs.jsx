import React from "react";

import PickingUsItem from "./PickingUsItem";
import Fade from "react-reveal/Fade";
const PickingUs = ({ items }) => {
  return (
    <div className="pickUs__all">
      <div className="pickUs__flex">
        <div className="pickUs__title">
          <h1>¿PORQUÉ ELEGIR PYRONODE?</h1>
        </div>

        <Fade right cascade >
          <div className="pickUs__itemContainer">
            {items.map((item) => {
              return <PickingUsItem key={item.id} content={item} />;
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default PickingUs;
