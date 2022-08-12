import "./serviceCards.styles"
import {Card} from "./serviceCards.styles";

export default function ServiceCard({icon, title, content}){
    return(
        <>
            <Card>
                <div className={"content"}>
                    <img className="logo" src={icon}/>
                        <h6>{title}</h6>
                        <div className={"hover_content"}>
                            <p>{content}</p>
                        </div>
                </div>
            </Card>
        </>
    )
}