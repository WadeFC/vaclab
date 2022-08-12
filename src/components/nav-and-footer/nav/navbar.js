import {Hamburger, Logo, LogoContainer, Menu, MenuLinks, Nav, Navigation} from "./navbar.styles";
import {Button} from "../../button/button";
import {useState} from "react";
import {VaclabLogo} from "../../../assets/svgs";


const Navbar =()=>{
    const[mobile, setMobile] = useState(false)
    return(
        <>
            <Navigation>
                <Nav className={"side-margin"}>
                    <Logo href={""}>
                        <LogoContainer>
                            <VaclabLogo/>
                        </LogoContainer>

                        <h2>Vaclab</h2>
                    </Logo>

                    <Hamburger onClick={()=> setMobile(!mobile)}>
                        <span/>
                        <span/>
                        <span/>
                    </Hamburger>

                    <Menu mobile={mobile}>
                        <MenuLinks>Home</MenuLinks>
                        <MenuLinks>Service</MenuLinks>
                        <MenuLinks>Shop</MenuLinks>
                        <MenuLinks>About</MenuLinks>
                        <Button type={"glass"}>Login</Button>
                    </Menu>

                </Nav>
            </Navigation>

        </>
    )
}
export {Navbar}