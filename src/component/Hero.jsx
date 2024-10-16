import Databiz from "../assets/client-databiz.svg"
import Audiophile from "../assets/client-audiophile.svg"
import Meet from "../assets/client-meet.svg"
import Maker from "../assets/client-maker.svg"
import Imagedeskstop from "../assets/image-hero-desktop.png"
import Imagemobile from "../assets/image-hero-mobile.png"
const Hero = () =>{
    return (
        <div>
            <div  class="hero-container">
            <main class="hero-content">
                <h1>Make remote work</h1>
                <p>Get your team in sync. No matter your location. 
                    Streamline processes, create team rituals, and 
                    watch productivity soar.</p>
                    <button class="btn-2">Learn More</button>
                    <div class="hero-anc">
                        <img src={Databiz} alt="not loading"/>
                        <img src={Audiophile} alt="not loading"/>
                        <img src={Meet} alt="not loading"/>
                        <img src={Maker} alt="not loading"/>
                    </div>
            </main>
            <main class="heroimg">
                <img  class="heroimg-img" src={Imagedeskstop} alt=""/>
                <img class="heroimg-img2" src={Imagemobile} alt=""/>

            </main>
            </div>

        </div>
    )
}
export default Hero