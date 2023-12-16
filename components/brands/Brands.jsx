import './brands.css'

import amazon from './../../img/brands/Amazon.png'
import hm from './../../img/brands/HM.png'
import lacoste from './../../img/brands/Lacoste.png'
import levis from './../../img/brands/Levis.png'
import obey from './../../img/brands/Obey.png'
import shopify from './../../img/brands/Shopify.png'


const Brands = () => 

{
    return ( <section className="brands">
        <div className="container">
            <ul className="brands__list">
                <li><a href="#!"><img src={hm} alt=''></img></a></li>
                <li><a href="#!"><img src={obey} alt=''></img></a></li>
                <li><a href="#!"><img src={shopify} alt=''></img></a></li>
                <li><a href="#!"><img src={lacoste} alt=''></img></a></li>
                <li><a href="#!"><img src={levis} alt=''></img></a></li>
                <li><a href="#!"><img src={amazon} alt=''></img></a></li>
            </ul>
        </div>
    </section> );
}

export default Brands