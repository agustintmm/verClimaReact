import Formulario from "./Formulario"
import Spinner from "./Spinner"
import ResultadoClima from "./ResultadoClima"
import useClima from "../hooks/useClima"


export default function AppClima() {
  
  const { resultado, cargando, alerta } = useClima()
  console.log(cargando)
  
  return (
    <> 
        <header>
            <h1>Consultá el clima</h1>
        </header>
        <main>
            <Formulario />

            { 
            
              cargando ? <Spinner/> : 
              resultado?.name ? <ResultadoClima /> : 
              alerta ? <p>{alerta}</p> : <></>
              
            }
        </main>
    </>
  )
}
