import {Button} from "../../components";
import {LandingCardSmall} from "./landingPage-card/small card/landingCard";
import Nurse from "../../assets/images/nurse.png"
import FadeOut from "../../assets/images/fadeout.png"
import {LandingCardLarge} from "./landingPage-card/large card/landingCardLarge";
import {LargerCard} from "./landingPage-card/Larger card/landingCardLarger";
import Fade from "../../components/carousel for cards/gotoCarousel";
import {
    ButtonAndDescription,
    Heading,
    Header,
    NurseImage,
    ImageDiv,
    FadeOutBottom,
    ParentCardBox,
    CardDiv, FadeOutTop, Section, UserReview, Services, ServicesSection

} from "./landingPage.styles"
import ServiceCard from "../../components/service cards/serviceCards";
import Health from "../../assets/svgs/health.svg"
import Vaccine from "../../assets/svgs/vaccine.svg"
import Consultancy from "../../assets/svgs/consultancy.svg"


const LandingPage =()=>{
    return(
        <>

            <Header>
                <Heading className={"side-margin"}>
                    <p>Get protection today</p>
                    <h1>VACLAB</h1>

                    <ButtonAndDescription>
                        <Button>Get a slot now</Button>
                        <div>
                            <p>
                                Your <span style={{color:"var(--green)"}}>healthy</span> life starts here
                                <br/>
                                <br/>
                                Get you and your family<br/>
                                protected from the Covid 19<br/>
                                pandemic. Enjoy protection.
                            </p>
                        </div>
                    </ButtonAndDescription>
                    <ImageDiv>
                        <NurseImage src={Nurse}/>
                    </ImageDiv>
                </Heading>
                <FadeOutBottom src={FadeOut}/>
                <FadeOutTop src={FadeOut}/>
            </Header>


            <Section className={"side-margin"}>
                <div className={"section_content"}>
                    <h4>Why I must get vaccinated?</h4>
                    <h2>Corona virus always <br/>getting stronger</h2>
                    <p>Corona virus always evolves.
                        By getting you and your family vaccinated,
                        you all got some advantages like:
                    </p>
                </div>

                <ParentCardBox>
                    <div className={"first_card_set"}>
                        <LandingCardSmall emoji={'🤒'}>Prevent Effects</LandingCardSmall>
                        <LandingCardSmall emoji={"🤘"}>Create Antibodies</LandingCardSmall>
                    </div>
                    <LandingCardLarge topic={"Gaining Immunity"}>From wikipedia, people that have been
                        vaccinated have more immunity to corona virus
                    </LandingCardLarge>
                </ParentCardBox>
            </Section>

            <Section className={"side-margin"}>
                <div className={"text_heading"}>
                    <h4>Can I get vaccinated?</h4>
                    <h3>Rules You Must Obey </h3>
                    <p>There are a few rules patients must know and obey before getting vaccinated</p>
                </div>

                <CardDiv>
                    <LargerCard className={"card "}
                                topic={"Blood Pressure"}
                                text={"Patients must have blood pressure under 110/180mmhg. " +
                                    "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                number={"01"}
                    />

                    <LargerCard className={"card card_margin"}
                                        topic={"Medicine Problem"}
                                         text={"Patients must have blood pressure under 110/180mmhg." +
                                             "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                         number={"02"}
                    />

                    <LargerCard className={"card"}
                                topic={"Chronic Diseases"}
                                text={"Patients must have blood pressure under 110/180mmhg. " +
                                    "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                number={"03"}
                    />

                    <LargerCard className={"card card_margin"}
                                topic={"Minimum Stress"}
                                text={"Patients must have blood pressure under 110/180mmhg." +
                                    "Patients with high blood pressure cannot get vaccinated till the blood pressure is back to normal "}
                                number={"04"}
                    />
                </CardDiv>
            </Section>



            <Section>
                <UserReview>
                    <div className={"side-margin"}>
                        <h4>User Reviews</h4>
                        <h2>What they say about us </h2>

                    </div>

                    <div className="footer">
                        <Fade/>
                    </div>
                </UserReview>
            </Section>

            <Section>
                <ServicesSection className={"side-margin"}>
                    <h4>Our services</h4>
                    <h2>Check out our wide range of services</h2>
                    <Services >
                        <ServiceCard
                            icon={Health}
                            title={"All-round health check"}
                            content={"Get full health check ups for you" +
                                "and your family. A check up a day, keeps the doctor away"}
                        />
                        <ServiceCard
                            icon={Vaccine}
                            title={"Book vaccination"}
                            content={"Get full health check ups for you" +
                                "and your family. A check up a day, keeps the doctor away"}
                        />
                        <ServiceCard
                            icon={Consultancy}
                            title={"Talk to one of us"}
                            content={"Get full health check ups for you" +
                                "and your family. A check up a day, keeps the doctor away"}
                        />
                    </Services>
                </ServicesSection>
            </Section>


        </>
    )
}
export {LandingPage}