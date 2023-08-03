import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";

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
          <p>Control de Presupuesto</p>
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
