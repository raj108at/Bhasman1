import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import GallaryPage from "./Pages/GallaryPage/GallaryPage";
import NetworkPage from "./Pages/Network/network";
import ContactPage from "./Pages/Contact/contact";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import HydraulicBreaker from "./Pages/Products/HydraulicBreaker/HydraulicBreaker";
import VibroRipper from "./Pages/Products/VibroRipper/VibroRipper";
import VibratoryPlateCompactor from "./Pages/Products/VibratoryPlateCompactor/VibratoryPlateCompactor";
import QuickCoupler from "./Pages/Products/QuickCoupler/QuickCoupler";
import HydraulicAttachment from "./Pages/Products/HydraulicAttachments/HydraulicAttachments";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services" exact>
          <ServicesPage />
        </Route>
        <Route path="/gallary" exact>
          <GallaryPage />
        </Route>
        <Route path="/network" exact>
          <NetworkPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/HydraulicBreaker" exact>
          <HydraulicBreaker />
        </Route>
        <Route path="/VibroRipper" exact>
          <VibroRipper />
        </Route>
        <Route path="/VibratoryPlateCompactor" exact>
          <VibratoryPlateCompactor />
        </Route>
        <Route path="/QuickCoupler" exact>
          <QuickCoupler />
        </Route>
        <Route path="/HydraulicAttachment" exact>
          <HydraulicAttachment />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
