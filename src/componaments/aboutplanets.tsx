import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const Aboutplanets: React.FC = () => {
    const { planetName } = useParams<{planetName: string}>();
    const isHighlighted = (name: string) => name.toLowerCase() === planetName?.toLowerCase();
    const navigate = useNavigate();
    
    return (
        <>
        <div className="parent">
            <div className={`Kepler22b ${isHighlighted('Kepler22b') ? 'highlight' : ''}`}>
                <img src="https://exoplanets.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbWtEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--56aca35757a25dfcb00e2307006fd2fc7ceb8a76/Kepler22b.jpg?disposition=inline"className="picture" alt="a picture of planet"></img>
                <h3 className="title">Kepler 22 B</h3>
                <p className="paragraph">Kepler-22b is a super-Earth that could be covered in a super ocean. 
                    The jury is still out on Kepler-22b’s true nature; at 2.4 times Earth’s radius, it might even be gaseous. 
                    But theoretically an ocean world tipped on its side – a bit like our solar system’s ice giant, Uranus – turns out to be comfortably habitable based on recent computer modeling. 
                    Researchers found that an exoplanet in Earth’s size range, at a comparable distance from its sun and covered in water, could have an average surface temperature of about 60 degrees Fahrenheit (15.5 Celsius).
                    Because of its radical tilt, its north and south poles would be alternately bathed in sunlight and darkness, for half a year each, as the planet circled its star.</p>
            </div>
            <div className={`55Cancrie ${isHighlighted('55Cancrie') ? 'highlight' : ''}`}>
                    <img src="https://exoplanets.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHdjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--965f5dbb8dccf74c7a6b239f7618b6a1f897b3f4/55Cancrie_illo.jpg?disposition=inline"className="picture" alt="a picture of planet"></img>
                    <h3 className="title">55 Cancri E</h3>
                    <p className="paragraph">55 Cancri e, also known as Janssen, orbits a star called Copernicus only 41 light years away.
                    The molten surface is completely uninhabitable, but above the burning horizon, Janssen’s sister planet, Galileo, hangs in a dark sky.
                    Silicates in the atmosphere would condense into clouds on the tidally-locked planet's darkside reflecting the lava below.
                     So, the skies would sparkle. 55 Cancri e is a super-Earth exoplanet that orbits a G-type star similar to our Sun.
                    Its mass is 8.08 Earths, it takes 0.7 days to complete one orbit of its star, and is 0.01544 AU from its star.
                     Its discovery was announced in 2004.</p>
            </div>
                <div className={`AUMicroscopiib ${isHighlighted('AUMicroscopiib') ? 'highlight' : ''}`}>
                    <img src="https://exoplanets.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDBEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--63db1da4b7bf3ca4e1b9f80e9214dcd017858763/au_mic_b_1200x675.jpg?disposition=inline" className="picture" alt="a picture of a planet"></img>
                    <h3 className="title">AU Microscopii B</h3>
                    <p className="paragraph">Located less than 32 light-years from Earth, AU Microscopii is among the youngest planetary systems ever observed by astronomers, and its star throws vicious temper tantrums!
                    You’ve heard of the “terrible twos”? Well, AU Mic is in the midst of its terrible 22 … millions!
                    This devilish young system holds planet AU Mic b captive inside a looming disk of ghostly dust and ceaselessly torments it with deadly blasts of X-rays and other radiation, thwarting any chance of life… as we know it!
                    Beware! There is no escaping the stellar fury of this system.
                    The monstrous flares of AU Mic will have you begging for eternal darkness.</p>
                </div>
                <div className={`CDCetib ${isHighlighted('CDCetib') ? 'highlight' : ''}`}>
                    <img src="https://static.wixstatic.com/media/dba02e_d39f44df938540d3b23b91cc9a2b4b47~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dba02e_d39f44df938540d3b23b91cc9a2b4b47~mv2.png" className="picture" alt="a picture of planet"></img>
                    <h3 className="title">CD Ceti b</h3>
                    <p className="paragraph">CD Ceti b is a super Earth exoplanet that orbits an M-type star.
                    Its mass is 3.95 Earths, it takes 2.3 days to complete one orbit of its star, and is 0.0185 AU from its star.
                    Its discovery was announced in 2020</p>
                </div>
                <div className={`DMPP-1d ${isHighlighted('DMPP-1d') ? 'highlight' : ''}`}>
                    <img src="https://gravitysimulator.org/static/97a459f3b0d08155e97306f7112dbab6/2a5b5/DMPP-1%20-%20System%20With%204%20Exoplanets%20.png" className="picture" alt="a picture of planet"></img>
                    <h3 className="title">DMPP-1 d</h3>
                    <p className="paragraph">DMPP-1 d is a super Earth exoplanet that orbits an F-type star. 
                    Its mass is 3.35 Earths, it takes 2.9 days to complete one orbit of its star, and is 0.0422 AU from its star. 
                    Its discovery was announced in 2019.</p>
                </div>
                <div className={`11ComaeBerenicesb ${isHighlighted('11ComaeBerenicesb') ? 'highlight' : ''}`}>
                    <img src="https://exoplanets.nasa.gov//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVVEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2fd830c6729e85b1fb144857982b08dac99d1c2d/koi-55b_250.jpg?disposition=inline" className="picture" alt="a picture of planet"></img>
                    <h3 className="title">11 Comae Berenices b</h3>
                    <p className="paragraph">11 Comae Berenices b is a gas giant exoplanet that orbits a K-type star. 
                     Its mass is 15.464 Jupiters, it takes 323.2 days to complete one orbit of its star, and is 1.178 AU from its star.
                     Its discovery was announced in 2007.</p>
                </div>
                <div className={`PSRB1257+12b ${isHighlighted('PSRB1257+12b') ? 'highlight' : ''}`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/PSR_B1257%2B12_B.jpg/220px-PSR_B1257%2B12_B.jpg" className="picture" alt="a picture of a planet"></img>
                    <h3 className="title">PSR B1257+12 b</h3>
                    <p className="paragraph">PSR B1257+12 b, along with fellow doomed worlds, were among the first and creepiest to be discovered as they orbit an undead star known as a pulsar.
                     Pulsar planets like Poltergeist and its neighboring worlds, Phobetor and Draugr, are consumed with constant radiation from the star’s core.
                     Nothing but the undead can subsist in this most inhospitable corner of the galaxy.
                     PSR B1257+12 b is a terrestrial exoplanet that orbits a pulsar. Its mass is 0.02 Earths, it takes 25.3 days to complete one orbit of its star, and is 0.19 AU from its star.
                     Its discovery was announced in 1994.</p>
                </div>
                <div className={`14Herculisb ${isHighlighted('14Herculisb') ? 'highlight' : ''}`}>
                    <img src="https://exoplanets.nasa.gov/assets/content/planets/gasgiant.jpg" className="picture" alt="a picture of a planet"></img>
                    <h3 className="title">14 Herculis b</h3>
                    <p className="paragraph">14 Herculis b is a gas giant exoplanet that orbits a G-type star.
                     Its mass is 8.053 Jupiters, it takes 4.8 years to complete one orbit of its star, and is 2.774 AU from its star.
                     Its discovery was announced in 2002.</p>
                </div>
                <div className={`TOI-1338b ${isHighlighted('TOI-1338b') ? 'highlight' : ''}`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/TOI_1338b.png/220px-TOI_1338b.png" className="picture" alt="a picture of a planet"></img>
                    <h3 className="title">TOI-1338 b</h3>
                    <p className="paragraph">TOI-1338 b is a Neptune-like exoplanet that orbits an F-type star.
                     Its mass is 33 Earths, it takes 95.2 days to complete one orbit of its star, and is 0.4607 AU from its star.
                     Its discovery was announced in 2020.</p>
                </div>
            
        </div>
        <button type='button'className='button' onClick={() => navigate('/')}>Go back to homepage</button></>
    )
}
export default Aboutplanets