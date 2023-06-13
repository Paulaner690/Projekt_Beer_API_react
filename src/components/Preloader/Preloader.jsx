import "./Preloader.css"

import beerGif from "../../assets/gif/LoadingBeer.gif"

const Preloader = () => {
   
    return ( 
        <section className="loadingPage">
            <img src={beerGif} alt="beerGif" />
            <h2 className="preloaderText">Wir lieben Bier!</h2>
        </section>
     );
}
 
export default Preloader;