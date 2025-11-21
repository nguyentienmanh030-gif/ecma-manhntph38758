import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
