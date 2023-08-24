import { useMemo } from "react"
import useClima from "../hooks/useClima"

export default function ResultadoClima() {
    
    
    const { resultado, busqueda } = useClima()
    const { name, main } = resultado
    
    const { ciudad } = useMemo( () => busqueda, [resultado]) 

    // Grados Kelvin
    const kelvin = 273.15

    return (
        <div className="contenedor">
            <h2>El Clima en {ciudad} es: </h2>
            <p><strong>Temperatura actual: { parseInt(main.temp - kelvin) }°C</strong></p>
            <p>Temperatura mínima: <span>{ parseInt(main.temp_min - kelvin) }°C</span></p>
            <p>Temperatura máxima: <span>{ parseInt(main.temp_max - kelvin) }°C</span></p>
        </div>
    )
}
