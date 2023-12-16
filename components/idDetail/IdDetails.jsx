import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './idDetails.module.css';
import { useSneakerData } from '../../Pages/SneakerPage/SneakerData';

const IdDetails = () => {
    const { id } = useParams();
    const sneakerData = useSneakerData();

    const sneaker = sneakerData.find((sneaker) => sneaker.id === id);

    if (!sneaker) {
        return <div>Sneaker not found</div>;
    }

    return (
        <div className={styles.idDetails}>
            <div className={styles.idDetails__text}>
                <div className={styles.idDetails__collection}>{sneaker.collection}</div>
                <div className={styles.idDetails__description}>{sneaker.description}</div>
                <button className={styles.idDetails__button}>{sneaker.button}</button>
            </div>
            <div className={styles.idDetails__right_section}>
                <img className={styles.idDetails__img} src={sneaker.img} alt="" />
            </div>
        </div>
    );
};

export default IdDetails;