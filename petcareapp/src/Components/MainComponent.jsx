import AccountComponent from "./account/AccountComponent";
import DetailComponent from "./detail/DetailComponent.";
import FooterComponent from "./footer/FooterComponent";
import ProductComponent from "./product/ProductComponent";
import AboutComponent from "./about/AboutComponent"
import CheckoutComponent from "./checkout/CheckoutComponent";
import HomeComponent from "./home/HomeComponent";

export default function main(){
    return(
        <div className="petWEb">
            {/* <AboutComponent /> 
            <ProductComponent />
            <FooterComponent />
            <DetailComponent />
            <AccountComponent /> 
            <CheckoutComponent /> */}
            <HomeComponent />
        </div>
    )
}