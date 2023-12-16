import './arrivals.css';
import Card from '../card/Card';

import cat01Img from './../../img/cards/card1.jpg'
import cat02Img from './../../img/cards/card2.jpg'
import cat03Img from './../../img/cards/card3.jpg'

const Arrivals = () => {
    return ( <section className="arrivals">
        <div className="container">
            <div className="arrivals__header">
                <h2 className="title-2">NEW ARRIVALS</h2>
            </div>
            <div className="arrivals__cards">
            <Card title="For Running" img={cat01Img} muted="Explore Now!"/>
            <Card title ="Casual" img = {cat02Img} muted = "Go For It!"/>
            <Card title ="Nike Specialx" img = {cat03Img} muted ="Check The Specials!" />
            </div>
        </div>
    </section> );
}

export default Arrivals;