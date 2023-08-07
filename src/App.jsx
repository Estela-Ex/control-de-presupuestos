import { useState } from 'react'
import Header from "./components/Header"
import Modal from "./components/Modal"
import { generarId } from './helpers'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [anidarModal, setAnidarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  function handleNuevoGasto() {
    setModal(true)
    
    
    setTimeout(() => {
      setAnidarModal(true);
    }, 500)
  }
  
  function guardarGasto(gasto) {
    gasto.id = generarId()
    setGastos([...gastos, gasto])


    setAnidarModal(false)
    setTimeout(() => {
      setModal(false)
    },500)
  }
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          anidarModal={anidarModal}
          setAnidarModal={setAnidarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App
