import "./BeerDetail.css"
import Nav from "../../components/Nav";

import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import Back from "../../assets/images/Back.png"
import Loading from "../../components/Loading";

const BeerDetail = () => {
    const[detailData, setDetailData] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
        .then((res) => res.json())
        .then((detailData) => {
            setDetailData(detailData)
        })
        .catch((err) => {
            console.log("Fehler beim Laden", err)
        })
    }, [])

    return ( 
        <>
        <Nav />

        {detailData ? (
            <section className="details">
                <NavLink to={'/beers'}><img className="back" src={Back} alt="zurück" /></NavLink>
                <article className="detailArticle">
                    <img src={detailData.image_url} alt={detailData.name} />
                    <div className="detailText">
                    <h2 className="bigH">{detailData.name}</h2>
                        <h3 className="yellowH">{detailData.tagline}</h3>
                        <div className="grayText">
                            <p className="firstBrewed">First brewed: </p>
                            <p>{detailData.first_brewed}</p>
                        </div>
                        <div className="grayText">
                            <p className="attenuationLevel">Attenuation Level: </p>
                            <p>{detailData.attenuation_level}</p>
                        </div>
                        <p className="description">{detailData.description}</p>   
                    </div>
                </article>
                
            </section>
        ) : (
            <Loading />
        )}
       
        </>
     );
}
 
export default BeerDetail;