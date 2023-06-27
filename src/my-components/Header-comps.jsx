import "../css/Global.css";

const HeaderComps = () => {
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
                            <div className="navHead">
                                <a href="/">Home</a>
                                <a href="/product">Product</a>
                                <a href="/about">About</a>
                                <a href="/consultation">Consultation</a>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>


        </>
    )
}

export default HeaderComps;