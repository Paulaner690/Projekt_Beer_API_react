import "./Loading.css"
import Logo from "../assets/images/Logo.svg"

const Loading = () => {
    return ( 
        <section className="loading">
            <img className="loadingImg" src={Logo} alt="logo" />
            <h2>Alles ist vergänglich, nur der Durst bleibt lebenslänglich.</h2>
        </section>
     );
}
 
export default Loading;