import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControPresupuesto from "./ControlPresupuesto";

export default function Header({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  return (
    <>
      <header>
        <h1>Control de Gastos</h1>

        {isValidPresupuesto ? (
          <ControPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
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
