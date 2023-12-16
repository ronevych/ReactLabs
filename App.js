import React from "react";
import Home from "./Pages/home/home";
import Catalog from "./Pages/catalogue/catalogue";
import Nav from './components/header/Header';
import Footer from './components/footer/Footer';
import IdDetails from './components/idDetail/IdDetails';
import CartPage from './Pages/CartPage/CartPage'; // Import the CartPage component
import { SneakerDataProvider } from "./Pages/SneakerPage/SneakerData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './components/header/header.css';
import './components/footer/footer.css';

function App() {
    return (
        <Router>
            <SneakerDataProvider>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Catalog" element={<Catalog />} />
                    <Route path="/Catalog/:id" element={<IdDetails />} />
                    {/* Add the route for the CartPage component */}
                    <Route path="/Cart" element={<CartPage />} />
                </Routes>
                <Footer />
            </SneakerDataProvider>
        </Router>
    );
}

export default App;
