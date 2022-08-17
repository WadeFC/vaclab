import {Hamburger, Login, Logo, LogoContainer, Menu, MenuLinks, Nav, Navigation} from "./navbar.styles";
import {Button} from "../../button/button";
import {useState} from "react";
import {VaclabLogo} from "../../../assets/svgs";
import {Link} from "react-router-dom";


const Navbar =()=>{
    const[mobile, setMobile] = useState(false)
    const[background, setBackground] = useState(false)
    const changeNavbarBackground = () =>{
        if(window.scrollY >= 80){
            setBackground(true);
        }
        else{
            setBackground(false);
        }
    };

    window.addEventListener("scroll", changeNavbarBackground)
    return(
        <>
            {
                background
                    ?
                    <Navigation background>
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

                    :

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
                                <Button buttonType={"glass"}><Login to={"/auth"}>Login</Login></Button>
                            </Menu>

                        </Nav>
                    </Navigation>
            }


        </>
    )
}
export {Navbar}