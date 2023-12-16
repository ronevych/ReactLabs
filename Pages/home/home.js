import React from "react";

import Arrivals from "../../components/arrivals/Arrivals";
import Brands from "../../components/brands/Brands";
import Promo from "../../components/promo/promo";
import ViewMore from './../../components/viewMore/ViewMore'

function Home() {
    return (
        <div className="App">
            <Promo />
            <Brands />
            <Arrivals />
            <ViewMore />
        </div>
    );
}

export default Home;
