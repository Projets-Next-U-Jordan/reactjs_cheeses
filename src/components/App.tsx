import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import { UserContextProvider } from "../context/UserContext";
import Footer from "./common/Footer";
import { CheeseContext } from "../context/CheeseContext";
import { useState } from "react";
import { Cheese } from "../types";

const cheeses:Cheese[] = [
    {name: "Cheddar", photo: "https://www.fromagegouda.fr/pub/media/catalog/product/cache/e49b825e2097b82b7746eb40be207ecb/r/e/red-cheddar-english_4.jpg", isAdmin: true},
    {name: "Brie", photo: "https://sodiaal-fromages-ingredients.com/wp-content/uploads/2020/10/Brie.jpg"},
    {name: "Gouda", photo: "https://www.fromagegouda.fr/pub/media/catalog/product/cache/e49b825e2097b82b7746eb40be207ecb/g/o/gouda-holland-kaas-kaese-cheese-jong-young-jung_9_.jpg"},
    {name: "Mozzarella", photo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Mozzarella_cheese_%281%29.jpg", isAdmin: true},
    {name: "Provolone", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Provolone_piquant.jpg/220px-Provolone_piquant.jpg"},
    {name: "Swiss", photo: "https://www.foodandwine.com/thmb/t-0AlYwHrzDhh_YxxJQRRLYuQ8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-71285433-2000-0888f731cdbb4f0e9236ea9f43bdf930.jpg"}
];

export default function App() {

    const [isSelected, setIsSelected] = useState(false);
    const value = {cheeses: cheeses, isSelected: isSelected, setSelected: setIsSelected};

    return (
        <CheeseContext.Provider value={value}>
            <UserContextProvider>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
            <Footer/>
        </CheeseContext.Provider>
    );
}
