import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Pages/Public/About/About";
import News from "../Pages/Public/News";
import Services from "../Pages/Public/Services";
import Home from "../Pages/Public/Home";
import ForInvestors from "../Pages/Public/ForInvestors";
import Contact from "../Pages/Public/Contact";
import Portfolio from "../Pages/Public/Portfolio";
import AdminTable from "../Crud/CrudTable/CrudTable";
import Awards from "../Pages/Public/About/Awards";
import CSRInitiatives from "../Pages/Public/About/CSRInitiatives";
import MissionAndVision from "../Pages/Public/About/MissionAndVision";
import OurStrength from "../Pages/Public/About/OurStrength";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/admintable" element={<AdminTable/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/for-investors" element={<ForInvestors />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards" element={<Awards/>} />
        <Route path="/csr-initiatives" element={<CSRInitiatives/>} />
        <Route path="/mission-and-vision" element={<MissionAndVision/>} />
        <Route path="/our-strength" element={<OurStrength/>} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
