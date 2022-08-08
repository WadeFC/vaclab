import {Hamburger, Logo, Menu, MenuLinks, Nav} from "./navbar.styles";
import {Button} from "../../button/button";
import {useState} from "react";


const Navbar =()=>{
    const[mobile, setMobile] = useState(false)
    return(
        <>
            <Nav className={"side-margin"}>
                <Logo href={""}>
                    <h2>Vacilabbs</h2>
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
        </>
    )
}
export {Navbar}