import { useState } from "react"
import useClima from "../hooks/useClima"


export default function Formulario() {

    const [ alerta, setAlerta ] = useState('')
    const { busqueda, datosBusqueda, consultarClima } = useClima()
    const { ciudad, pais } = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return 
        }

        consultarClima(busqueda)

    }
    return (
        <div className='contenedor'>
            {alerta && <p className="alerta">{alerta}</p>}
            <form
                onSubmit={handleSubmit}
            >
                <div className='campo'>
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        id='ciudad' 
                        type="text" 
                        name="ciudad"
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="pais">País</label>
                    <select 
                        name="pais" 
                        id="pais"
                        onChange={datosBusqueda}
                        value={pais}
                    >
                        <option value="">Selecciona</option>
                        <option value="US">Estados Unidos</option>
                        <option value="AR">Argentina</option>
                        <option value="MX">México</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input type="submit" value="Consultar el clima"/>
            </form>
        </div>
  )
}
