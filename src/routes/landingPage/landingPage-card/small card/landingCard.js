import "./landingCard.styles"
import {CardBox} from "./landingCard.styles";

const LandingCardSmall = ({children,imgSource})=>{
    return(
        <>
            <CardBox>
                {/*<img src={imgSource}/>*/}
                <p>{children}</p>
            </CardBox>
        </>
    )
}
export {LandingCardSmall}