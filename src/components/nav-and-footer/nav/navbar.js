import {
    Logo,
    NavigationContainer,
    NavigationLinks,
    NavigationLogo,
    Links,
    InnerContainer
} from "./navbar.styles";

const Navbar =()=>{
    return(
        <>
            <NavigationContainer as={"nav"}>
                <InnerContainer className={"side-margin"}>
                    <NavigationLogo>
                        <h2>Vacilabbs</h2>
                    </NavigationLogo>

                    <NavigationLinks>
                        <Links>Home</Links>
                        <Links>Services</Links>
                        <Links>Variants</Links>
                        <Links>About</Links>
                        <Links>Shop</Links>
                    </NavigationLinks>
                </InnerContainer>
            </NavigationContainer>
        </>
    )
}
export {Navbar}