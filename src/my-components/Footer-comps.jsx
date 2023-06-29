import "../css/footer.css";
import "../css/media.css";


const FooterComps = () => {

    return (
        <>
        
            <section id="footerSection">
                <div id="footerCtn" className="container">
                    <div className="leftFooter">
                        <div className="topLeftFooter gbFooter">
                            <h2>PETSHOP-ME</h2>
                            <p>The most complete center for animal needs in Indonesia</p>
                            <p>Jl-Almujahiddin 1 RT 02/RW 08 No:112</p>
                            <p>Develop by Keanu Ryansyah H.M!</p>
                        </div>
                    </div>
                    <div className="middleFooter gbFooter">
                        <h3>Online store</h3>
                        <ul>
                            <li>
                                <a href="">Tokopedia</a>
                            </li>
                            <li>
                                <a href="">Shoope</a>
                            </li>
                            <li>
                                <a href="">Bukalapak</a>
                            </li>
                            <li>
                                <a href="">Lazada</a>
                            </li>
                            <li>
                                <a href="">Blibli</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="rightFooter gbFooter">
                        <h3>Our service</h3>
                        <ul>
                            <li>
                                Pet clinic
                            </li>
                            <li>
                                Pet hotel
                            </li>
                            <li>
                                Pet grooming
                            </li>
                            <li>
                                Pet training
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )


}

export default FooterComps;