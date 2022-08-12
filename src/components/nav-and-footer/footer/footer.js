import {Button} from "../../button/button";
import Logo from "../../../assets/svgs/alternateVaclabLogo.svg"
import {BlueBox, DarkBlueBox, FooterDetails} from "./footer.styles";


const Footer = ()=>{
    return(
        <>
            <DarkBlueBox>
                <BlueBox>
                    <p>Protect yourself from the corona virus</p>
                    <h2>Get a vaccine now</h2>
                    <div className={"button_margin"}>
                        <Button type={"dark"}>Get a slot now</Button>
                    </div>
                    <img className={"clip-circle"} src={Logo}/>
                </BlueBox>

                <FooterDetails>
                    <div className={"address"}>
                        <p>No2 Owerri Road <br/> Enugu, Nigeria.</p>
                    </div>
                    <div className={"footer-items"}>
                        <p id={"first"}>Product</p>
                        <p>Drugs</p>
                        <p>Self medic</p>
                        <p>First aid</p>
                    </div>
                    <div  className={"footer-items"}>
                        <p id={"first"}>Home</p>
                        <p>About</p>
                        <p>Contact us</p>
                    </div>
                    <div  className={"footer-items"}>
                        <p id={"first"}>Policies</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Licenses</p>
                    </div>
                </FooterDetails>



            </DarkBlueBox>
        </>
    )
}
export {Footer}