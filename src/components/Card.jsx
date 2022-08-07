import "./Card.css";
import tostada1 from "../Images/1.jpg"
import tostada2 from "../Images/2.jpg"
import tostada3 from "../Images/3.jpg"

const Card = () => {
 
    return(
        <div className="conteiner"> 
         <img src={tostada1} className="tostada" />
         <h2>tostada con palta</h2>
         <div>pan</div>
         <img src={tostada2} className="tostada" />
         <h2>tostada</h2>
         <div>pan</div>  
         <img src={tostada3} className="tostada" />
         <h2>tostada feliz</h2>
         <div>pan</div>          
        </div>
    )

};

export default Card;


