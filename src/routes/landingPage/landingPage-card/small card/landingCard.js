import "./landingCard.styles"
import {CardBox, Flex} from "./landingCard.styles";
import {BlueBackground,Emoji} from "./landingCard.styles";

const LandingCardSmall = ({children, emoji})=>{
    return(
        <>
            <CardBox>
                <Flex>
                    <BlueBackground>
                        <Emoji>{emoji}</Emoji>
                    </BlueBackground>
                    <p>{children}</p>
                </Flex>

            </CardBox>
        </>
    )
}
export {LandingCardSmall}