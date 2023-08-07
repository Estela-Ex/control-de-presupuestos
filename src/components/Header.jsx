import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControPresupuesto from "./ControlPresupuesto";
export default function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  return (
    <>
      <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
          <ControPresupuesto presupuesto={presupuesto} />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
      </header>
    </>
  );
}
