import styles from './Card.module.css';
import arrowImg from './../../img/cards/ArrowImg.svg'

const Card = (props) => {

    return ( 
    <div className={styles.card}>
        <a href="#!" className={styles.card__link}></a>
        <img className = {styles.card__img} src={props.img} alt="Cat01" />
        <div className={styles.card__body}>
            <div className={styles.card__text}>
                <div className={styles.card__title}>{props.title}</div>
                <div className={styles.card__muted}>{props.muted}</div>
            </div>
            <div className={styles.card__icon}>
                <img src={arrowImg} alt="" />
            </div>
        </div>
    </div> );
}

export default Card;