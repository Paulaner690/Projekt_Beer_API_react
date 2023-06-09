import Nav from "../../components/Nav";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Back from "../../assets/images/Back.png"
import Loading from "../../components/Loading";

const RandomBeer = () => {

    const [randomData, setRandomData] = useState()

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((res) => res.json())
        .then((randomData) => {
            setRandomData(randomData)
            console.log(randomData)
        })
        .catch((err) => {
            console.log("Fehler beim Laden", err)
        })
    }, [])
    return ( 
        <>
        <Nav />
        {randomData ? (
            <>
        <article className="details">
            <NavLink to={'/'}><img className="back" src={Back} alt="zurück" /></NavLink>
            <article className="detailArticle">
                <img src={randomData.image_url} alt={randomData.name} />
                <div>
                    <h2 className="bigH">{randomData.name}</h2>
                    <h3 className="yellowH">{randomData.tagline}</h3>
                    <div className="grayText">
                        <p>First brewed:</p>
                        <p>{randomData.first_brewed}</p>
                    </div>
                    <div className="grayText">
                        <p>Attenuation Level:</p>
                        <p>{randomData.attenuation_level}</p>
                    </div>
                        <p className="description">{randomData.description}</p>
                </div>
            </article>
        </article>
        
        </>
        ) : (
            <Loading />
        )}
        
        </>
     );
}
 
export default RandomBeer;