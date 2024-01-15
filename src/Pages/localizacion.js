export default function Localizacion(){
    return(
        <div>
            <p className="text-center p-6 text">
            Estimado cliente, ponemos a su disposición el mapa de localización de nuestra empresa.
</p>

<a href='https://www.google.com/maps/place/NEUMAN+SA/@-34.5382535,-58.5649698,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcba0f0b0039cf:0x9949a3b65a95135a!8m2!3d-34.5382579!4d-58.5623949!16s%2Fg%2F11cp5jbq5x?entry=ttu'>
                  <img
                    className="h-500 w-auto p-6 margin: 1em; flex justify-center"
                    src='/assets/mapa.jpg'
                    alt="Foto Ubicacion"
                  />
                </a>
        </div>
    )
}