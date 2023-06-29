import { useState } from "react";
import "../css/Global.css";

const HeaderComps = () => {

    const [showMenu, setShowNav] = useState(false);
    
    function test() {

        if(showMenu) {
            setShowNav(false)
            return;
        }

        setShowNav(true);

    }
    

    return (
        <>

            <header>
                <section id="headerSection">
                    <div id="headerContainer" className="container">
                        <div className="logo">
                            <a href="/">
                                <h1>PETSHOP-ME!</h1>
                            </a>
                        </div>
                        <nav>
                            <div className={`navHeadLeft ${showMenu ? "active" : ""}`}>
                                <a href="/">Home</a>
                                <a href="/product">Product</a>
                                <a href="/about">About</a>
                                <a href="/consultation">Consultation</a>

                                <div className="closeMenu" onClick={test}>
                                    <p>X</p>
                                </div>

                            </div>
                            <div className="mobileNav"onClick={test}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                                </div>
                        </nav>
                    </div>
                </section>
            </header>


        </>
    )
}

export default HeaderComps;