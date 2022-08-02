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
const LargerCardAlternate =({topic, text, number})=>{
    return(
        <>
            <OuterBox alternate>
                <Topic alternate>{topic}</Topic>
                <Text alternate>{text}</Text>
                <ButtonDiv>
                    <span alternate>Read more</span>
                    <span alternate>&#8594;</span>
                </ButtonDiv>
                <Number>
                    <NumberText alternate>
                        {number}
                    </NumberText>

                </Number>
            </OuterBox>
        </>
    )
}
export {LargerCard,LargerCardAlternate}