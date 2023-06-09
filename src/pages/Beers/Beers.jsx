import "./Beers.css"
import Nav from "../../components/Nav";
import Loading from "../../components/Loading";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BeerList = () => {
    const [beer, setBeer] = useState()

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => res.json())
        .then((beer) => {
            setBeer(beer)
            console.log(beer)
        })
        .catch((err) => {
            console.log("Fehler beim Laden", err)
        })
    }, [])

    return ( 
        <section>
            <Nav />

            {beer ? (
                <article className="beers">
                    <h2 className="pageTitle">Alle Sorten</h2>
                    {beer.map((item, index) => (
                        <div className="beerContainer" key={index}>
                            <img src={item.image_url} alt={item.name} />
                            <div className="AllText">
                                <h2 className="bigH">{item.name}</h2>
                                <h3 className="yellowH">{item.tagline}</h3>
                                <p>Created by: {item.name}</p>
                                <NavLink className="detailBtn" to={`/beerdetail/${item._id}`}>Details</NavLink>
                            </div>
                        </div>
                    ))}
                </article>
            ) : (
                <Loading />
            )}
        </section>
     );
}
 
export default BeerList;