import { useEffect, useState } from "react";
import axios from "axios";
import "../css/card.css";

const CardComps = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/dataCat")
        .then((response) => {
            
            setData(response.data);

        })

        .catch((error) => {
            console.log(error);
        })
    }, [])
      
      
    

    return (
        <>
        
            <section id="cardSection">
                <div id="cardCtn" className="container">
                    <div className="cardTitle">
                        <div className="cardTitleBefore"></div>
                        <h2>Best for cat</h2>
                    </div>
                    <div className="cardBox">
                        {data.map((cat) => {

                            return (

                                <div className="cardChild" key={cat.id_products}>
                                    <div className="topCard">
                                        <img src={`src/all-image/${cat.image_products}`} alt="" />
                                    </div>
                                    <div className="bottomCard">
                                        <h3>{cat.name_products}</h3>
                                        <p>{cat.desc_products}</p>
                                        <div className="priceProduct">
                                            <span>$</span>
                                            <span>{cat.price_products + "0"}</span>
                                        </div>
                                        <div className="buttonWr buttonPink">
                                            <a href="#">Add to bucket</a>
                                        </div>
                                    </div>
                                </div>

                            )

                        })}
                    </div>
                </div>
            </section>   

        
        </>
    )


    
}

export default CardComps;