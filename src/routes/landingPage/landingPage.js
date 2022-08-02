import {Button} from "../../components";
import {LandingCardSmall} from "./landingPage-card/small card/landingCard";
import Nurse from "../../assets/images/nurse.png"
import FadeOut from "../../assets/images/fadeout.png"
import {
    ButtonAndDescription,
    GetProtection,
    DescriptionHeader,
    Vaclab,
    ProtectionText,
    Heading,
    Header,
    HealthyLife,
    VacilabContainer,
    NurseImage,
    ImageDiv,
    FadeOutBottom,
    FadeOutTop,
    Maxwidth,
    FirstText,
    WhyGet,
    CardContainer,
    ParentCardBox,
    Section,
    SectionTwoFirstText, SectionTwoText, CardDiv

} from "./landingPage.styles"
import {LandingCardLarge} from "./landingPage-card/large card/landingCardLarge";
import {LargerCard, LargerCardAlternate} from "./landingPage-card/Larger card/landingCardLarger";

const LandingPage =()=>{
    return(
        <>
            <Header>
                <Heading className={"side-margin"}>
                    <GetProtection>
                        <ProtectionText>Get protection today</ProtectionText>
                    </GetProtection>
                    <VacilabContainer>
                        <Vaclab>Vacilabbs</Vaclab>
                    </VacilabContainer>
                    <ButtonAndDescription>
                        <div>
                            <Button>Get a slot now</Button>
                        </div>
                        <div>
                            <DescriptionHeader>
                                <HealthyLife>Your <span style={{color:"var(--green)"}}>healthy</span> life starts here</HealthyLife>
                            </DescriptionHeader>

                            <HealthyLife>Get you and and your family<br/>
                                protected from the Covid 19 <br/> pandemic
                                enjoy protection
                            </HealthyLife>
                        </div>
                    </ButtonAndDescription>
                    <ImageDiv>
                        <NurseImage src={Nurse}/>
                    </ImageDiv>
                </Heading>
                <FadeOutBottom src={FadeOut}/>
            </Header>
            <div className={"container"}>
                <Section className={"section"}>
                    <div className={"side-margin"}>
                        <div style={{paddingTop:"100px"}}>
                            <FirstText>
                                <WhyGet>Why I must get vaccinated?</WhyGet>
                            </FirstText>
                            <FirstText>
                                <h2>Corona virus always <br/>
                                    getting stronger
                                </h2>
                            </FirstText>
                            <FirstText>
                                <Maxwidth>
                                    Corona virus always evolves.
                                    By getting you and your family vaccinated, you all got some advantages like:
                                </Maxwidth>
                            </FirstText>
                        </div>
                        <ParentCardBox>
                            <CardContainer>
                                <LandingCardSmall emoji={'🤒'}>Prevent Effects</LandingCardSmall>
                                <LandingCardSmall emoji={"🤘"}>Create Antibodies</LandingCardSmall>
                            </CardContainer>
                            <LandingCardLarge topic={"Gaining Immunity"}>From wikipedia, people that have been
                                vaccinated have more immunity to corona virus
                            </LandingCardLarge>
                        </ParentCardBox>
                    </div>
                </Section>

                <Section className={"section"}>
                    <div className={"side-margin"} style={{paddingTop: "100px"}}>
                        <SectionTwoFirstText>
                            <div>
                                <h4 style={{color:"var(--primary-blue)", marginBottom:"1rem"}}>Can I get vaccinated?</h4>
                                <h3 style={{marginBottom:"1rem"}}>Rules You Must Obey </h3>
                            </div>
                            <SectionTwoText>There are a few rules patients must know and obey before getting vaccinated</SectionTwoText>
                        </SectionTwoFirstText>

                        <CardDiv>
                            <LargerCard topic={"Blood Pressure"}
                                        text={"Patients must have blood pressure under 110/180mmhg. " +
                                            "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                        number={"01"}
                            />
                            <div style={{paddingTop:"150px"}}>
                                <LargerCardAlternate topic={"Medicine Problem"}
                                            text={"Patients must have blood pressure under 110/180mmhg." +
                                                "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                            number={"02"}
                                />
                            </div>

                        </CardDiv>
                    </div>
                </Section>
                <Section className={"section"}>
                    <div className={"side-margin"} style={{paddingTop: "100px"}}>

                        <CardDiv>
                            <LargerCardAlternate topic={"Chronic Diseases"}
                                        text={"Patients must have blood pressure under 110/180mmhg. " +
                                            "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                        number={"03"}
                            />
                            <div style={{paddingTop:"150px"}}>
                                <LargerCardAlternate topic={"Minimum Stress"}
                                                     text={"Patients must have blood pressure under 110/180mmhg." +
                                                         "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                                     number={"04"}
                                />
                            </div>

                        </CardDiv>
                    </div>
                </Section>
            </div>
        </>
    )
}
export {LandingPage}