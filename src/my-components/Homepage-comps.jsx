import catCategories from "../all-image/catCategories.jpg";
import dogCategories from "../all-image/dogCategories.jpg";
import fishCategories from "../all-image/fishCategories.jpg";
import reptileCategories from "../all-image/reptileCategories.jpg";
import "../vanilla-js/index";
import "../vanilla-js/functions";

const Homepages = () => {

    let serviceCards = [
        {
            titleCard : "Pet clinic",
            textService : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat sed libero facilis animi soluta et, eum ea voluptas iusto!",
            buttonService : "Consult now!"

        },

        {
            titleCard : "Pet hotel",
            textService : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat sed libero facilis animi soluta et, eum ea voluptas iusto!",
            buttonService : "Consult now!"
        },

        {
            titleCard : "Pet grooming",
            textService : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat sed libero facilis animi soluta et, eum ea voluptas iusto!",
            buttonService : "Consult now!"
        },

        {
            titleCard : "Pet training",
            textService : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat sed libero facilis animi soluta et, eum ea voluptas iusto!",
            buttonService : "Consult now!"
        }
    ];
    
    return (
        <>
            <main>
                <section id="mainSectionHero">
                    <div id="heroContainer" className="container">
                        <div className="heroContentPr animate__animated animate__fadeInRight animate__delay-1s">
                            <div className="heroContentChild">
                                <h2>Love your pet by taking care of it at Petshop-me!</h2>
                                <p>Trust your pet to Petshop-me, Because the best care and the best products are only in Petshop-me.</p>
                                <div className="buttonWr">
                                    <a href="">Consult now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="petCategoriesSection">
                    <div id="petCategoriesContainer" className="container">
                        <div className="titleCategories">
                            <h2>- Your pets -</h2>
                        </div>
                        <div className="petCategoriesBox">
                            <div className="catCategories gbCategories">
                                <img src={catCategories} alt="" />
                                <a href="">Cat</a>
                            </div>
                            <div className="dogCategories gbCategories">
                                <img src={dogCategories} alt="" />
                                <a href="">Dog</a>
                            </div>
                            <div className="fishCategories gbCategories">
                                <img src={fishCategories} alt="" />
                                <a href="">Fish</a>
                            </div>
                            <div className="reptileCategories gbCategories">
                                <img src={reptileCategories} alt="" />
                                <a href="">Reptile</a>
                            </div>
                        </div>
                    </div>
                </section>

                
                <div id="promoCtn" className="container">
                    <div className="ribbonBefore"></div>
                    <div className="promoText">
                        <p>On special days, all products are 20% off for a minimum spend of $23.99!</p>
                    </div>
                    <div className="ribbonAfter"></div>
                </div>

                <section id="serviceSection">
                    <div id="serviceContainer" className="container">

                        <div className="serviceTitle">
                            <h2>- Service available -</h2>
                        </div>

                        <div className="serviceCardWr">
                            {serviceCards.map((serviceCard, index) => {
                                return <div key={index} className="serviceCard">
                                    <div className="titleCard">
                                        <h3> {serviceCard.titleCard} </h3>
                                    </div>
                                    <div className="textService">
                                        <p> {serviceCard.textService} </p>
                                    </div>
                                    <div className="buttonWr">
                                        <a href=""> {serviceCard.buttonService} </a>
                                    </div>
                                    <i className="fa-solid fa-shield-cat"></i>
                                </div>
                            })}
                        </div>
                    </div>
                </section>

            </main>

        </>
    )

}

export default Homepages;