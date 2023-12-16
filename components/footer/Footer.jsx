import './footer.css'

import fb from './../../img/socials/fb.svg'
import insta from './../../img/socials/inst.svg'
import twitter from './../../img/socials/tw.svg'
import linkedin from './../../img/socials/in.svg'

const Footer = () => {
    return ( <section className="footer">
        <div className="container">
            <div className="footer__text">
                <h2 className="footer__heading">FASHION</h2>
                    <div className="footer__desc">Complete your style with awesome clothes from us.</div>
                        <ul className='footer__list'>
                            <li><a href ="https://www.facebook.com/dmytro.ronevych.5"> <img src={fb} alt="facebook logo"></img></a></li>
                            <li><a href ="#!"> <img src={insta} alt="instagram logo"></img></a></li>
                            <li><a href ="#!"> <img src={twitter} alt="twitter logo"></img></a></li>
                            <li><a href ="#!"> <img src={linkedin} alt="linkedin logo"></img></a></li>
                        </ul>
            </div>
            <div className="footer__nav">
                 {/* <div className="fcolumn__top"><a href ="#!">Company</a>  */}
                <a href ="#!" className="fcolumn__top">Company
                    <ul className='fcolumn__items'>
                        <li><a href="#!" className='fcol__item-1'>About</a></li>
                        <li><a href="#!" className='fcol__item-2'>Contact us</a></li>
                        <li><a href="#!" className='fcol__item-3'>Support</a></li>
                        <li><a href="#!" className='fcol__item-4'>Careers</a></li>
                    </ul>
                    </a>
                <a href="#!" className="scolumn__top">Quick Link
                    <ul className='scolumn__items'>
                        <li><a href = "#!" className='scol__item-1'>Share Location</a></li>
                        <li><a href = "#!" className='scol__item-2'>Orders Tracking</a></li>
                        <li><a href = "#!" className='scol__item-3'>Size Guide</a></li>
                        <li><a href = "#!" className='scol__item-4'>FAQs</a></li>
                    </ul>
                </a>
                <a href = "#!" className="tcolumn__top">Legal
                    <ul className='tcolumn__items'>
                        <li><a href = "#!" className='tcol__item-1'>Terms & conditions</a></li>
                        <li><a href = "#!" className='tcol__item-2'>Privacy Policy   </a></li>
                    </ul>
                </a>
            </div>
        </div>
    </section>
    );
}

export default Footer