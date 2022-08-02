import "../large card/landingPageLarge.style"
import {BlueBackground, ButtomBox, CardBox, Emoji, EmojiAndTopic, InnerBox} from "./landingPageLarge.style";

const LandingPageLarge =({children, topic})=>{
    return(
        <>
            <CardBox>
                <InnerBox>
                    <EmojiAndTopic>
                        <BlueBackground>
                            <Emoji>💪</Emoji>
                        </BlueBackground>
                        <h4 style={{color:"white"}}>{topic}</h4>
                    </EmojiAndTopic>
                    <div>
                        <p style={{color:"white"}}>{children}</p>
                    </div>
                </InnerBox>
                <ButtomBox>
                    <span>More information</span>
                    <span>&#8594;</span>
                </ButtomBox>

            </CardBox>
        </>
    )
}
export {LandingPageLarge}