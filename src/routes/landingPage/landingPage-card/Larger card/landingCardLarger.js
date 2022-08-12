import "./landingCardLarger.styles"
import {ButtonDiv, Number, NumberText, OuterBox, Text, Topic} from "./landingCardLarger.styles";
const LargerCard =({topic, text, number})=>{
    return(
        <>
            <OuterBox>
                <Topic>
                    <h4>{topic}</h4>
                </Topic>
                <Text>
                    <p>{text}</p>
                </Text>
                <ButtonDiv>
                    <span>Read more</span>
                    <span>&#8594;</span>
                </ButtonDiv>
                <Number>
                    <NumberText>
                        {number}
                    </NumberText>

                </Number>
            </OuterBox>
        </>
    )
}

export {LargerCard}