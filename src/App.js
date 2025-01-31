import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Product from './Product/Product.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import Services from './Services/Services.jsx';
import FAQ from './FAQ/FAQ.jsx';
import ContactUs from './ContactUs/ContactUs.jsx';
import ProductDescription from './ProductDescription/ProductDescription.jsx';
import Login from './Auth/Login/Login.jsx';
import SignUp from './Auth/SignUp/SignUp.jsx';
import ForgotPassword from './Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Auth/ResetPassword/ResetPassword.jsx';
import DropdownProducts from './DropdownProducts/DropdownProducts.jsx';
import Cart from './Cart/Cart.jsx';
import SuccessfulMessage from './SuccessfulMessage/SuccessfulMessage.jsx';
import TrackOrder from './TrackOrder/TrackOrder.jsx';
import BillingInfo from './BillingInfo/BillingInfo.jsx';
import TrackOrderDetails from './TrackOrderDetails/TrackOrderDetails.jsx';
import InstallationMannual from './InstallationMannual/InstallationMannual.jsx';
import Blogs from './Blogs/Blogs.jsx';
import TermsConditions from './Terms&Conditions/Terms&Conditions.jsx';
import WarrantPolicy from './WarrantPolicy/WarrantPolicy.jsx';
import Download from './Download/Download.jsx';
import OTP from './Auth/OTP/OTP.jsx';

function AppContent(){
  const location = useLocation();
  const noFooterPath = ["/login", "/signup", "/forgotpassword", "/resetpassword", "/otp"];
  const noNavbarPath = [];

  return(
    <div>
      {!noNavbarPath.includes(location.pathname) && <Navbar/>}
      <Routes>
        <Route path = "/product" element={<Product/>}/>
        <Route path = "/aboutus" element={<AboutUs/>}/>
        <Route path = "/services" element={<Services/>}/>
        <Route path = "/faq" element={<FAQ/>}/>
        <Route path = "/contactus" element={<ContactUs/>}/>
        <Route path = "/productdescription" element={<ProductDescription/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
        <Route path = "/forgotpassword" element={<ForgotPassword/>}/>
        <Route path = "/resetpassword" element={<ResetPassword/>}/>
        <Route path = "/otp" element={<OTP/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/dropdownproducts" element={<DropdownProducts/>}/>
        <Route path = "/successfulmessage" element={<SuccessfulMessage/>}/>
        <Route path = "/trackorder" element={<TrackOrder/>}/>
        <Route path = "/billinginfo" element={<BillingInfo/>}/>
        <Route path = "/trackorderdetails" element={<TrackOrderDetails />}/>
        <Route path = "/installationmannual" element={<InstallationMannual/>}/>
        <Route path = "/blogs" element={<Blogs/>}/>
        <Route path = "/termsconditions" element={<TermsConditions/>}/>
        <Route path = "/warrantpolicy" element={<WarrantPolicy/>}/>
        <Route path = "/download" element={<Download/>}/>
        <Route path = "/" element={<Home/>}/>
      </Routes>
      {!noFooterPath.includes(location.pathname) && <Footer/>}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent/>
    </Router>
  );
}

export default App;
