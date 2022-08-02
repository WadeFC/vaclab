import {
    Navbar,
    Footer
} from "../../components";

const MainLayout =({children})=>{
    return(
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
export {MainLayout}