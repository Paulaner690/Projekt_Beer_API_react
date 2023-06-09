import "./Home.css"
import Nav from "../../components/Nav";

import { NavLink } from "react-router-dom";

import RandomImg from "../../assets/images/randomBeer.png"
import AllImg from "../../assets/images/allBeer.png"

const Home = () => {
    
    return ( 
    <>
        <Nav />
        <section className="home">
            <section className="welcome">
                <h1>Willkommen bei Beerpedia!</h1>
                <p className="heroText">Finde DEIN Lieblingsbier!</p>
            </section>

            <section className="homeSelection">
                <article className="allBeersSelection">
                    <div className="imgContainer">
                        <NavLink  to={"/beers"}>
                            <img className="homeImg" src={AllImg} alt="Beer" />
                            <h2 className="beerChoice">Alle Biere</h2>
                        </NavLink>
                    </div>
                        <p className="selectionText">Hier finden Sie eine Übersicht aller bereits eingetragenen Biersorten.</p>
                </article>

                <article className="randomBeerSelection">
                    <div className="imgContainer">
                        <NavLink to={"/random"}>
                            <img className="homeImg" src={RandomImg} alt="Beer" />
                            <h2 className="beerChoice">Zufälliges Bier</h2>
                        </NavLink>
                    </div>
                        <p className="selectionText">Sie wissen noch nicht wonach Sie suchen?  Lassen Sie sich überraschen! </p>
                </article>
            </section>
        </section>
    </>
     );
}
 
export default Home;