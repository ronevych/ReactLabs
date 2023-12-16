import "../promo/promo.css";
import heroImg from "../../img/images/sneaker__hero.jpg";

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <span className ="highlight"> 
                            <span>LET`S</span> 
                            </span>
                            EXPLORE 
                            
                            <span className ="highlight highlight--lightbrown"> 
                            <span>UNIQUE </span> 
                            </span>
                            
                            SNEAKERS.
                        </div>
                        <div className="promo__desc">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="promo__button-wrapper">
                            <a href="#!" className="promo__button">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="promo_image">
                        <img src={heroImg} alt="Promo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;
