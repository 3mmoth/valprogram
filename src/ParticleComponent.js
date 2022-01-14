import Particles from "react-tsparticles";
import particleConfig from "./config/particleConfig";

function ParticleBackground(){
    return(
        <Particles 
        id="tsparticles"
        className="particles"
        width="100%"
        height="100%"
        options={particleConfig}/>
    )
}

export default ParticleBackground