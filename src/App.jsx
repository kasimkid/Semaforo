import React, {useState} from "react";

const App = () => {

  const [ligth, setLigth] = useState ('')

  const click = (luz) => {
    setLigth(luz)



  }
  

  return(
     <>
     <div className="poste"></div>
     <div className="contenedor">
      <div id={ligth == 'rojo' ? "on" : 'false'} className="red-ligth" onClick={()=>click('rojo')}></div>
      <div id={ligth == 'yellow' ? "on" : 'false'} className="yellow-ligth" onClick={()=>click('yellow')}></div>
      <div id={ligth == 'green' ? "on" : 'false'} className="green-ligth" onClick={()=>click('green')}></div>
    </div>



    <div className="boton">
      <button className="random">Change</button>
    <button className="purple">Purple</button>
    </div>


     </>
  );

    }


export default App;
