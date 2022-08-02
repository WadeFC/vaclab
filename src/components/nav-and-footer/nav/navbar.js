import {
    Links,
    Logo,
    NavigationContainer,
    NavigationLinks,
    NavigationLogo
} from "./navbar.styles";

const Navbar =()=>{
    return(
        <>
            <NavigationContainer>
                <NavigationLogo>
                    <Logo alt={"Logo"}/>
                    <h1>Vaclab</h1>
                </NavigationLogo>

                <NavigationLinks>
                    <Links>Home</Links>
                    <Links>Services</Links>
                    <Links>Variants</Links>
                    <Links>About</Links>
                    <Links>contact</Links>

                </NavigationLinks>

            </NavigationContainer>
        </>
    )
}
export {Navbar}