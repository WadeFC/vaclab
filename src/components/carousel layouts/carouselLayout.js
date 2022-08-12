import "./carousel.styles"
import {CarouselCard, CarouselImage} from "./carousel.styles";
export const CarouselLayout = ({img,name,comment})=>{

    return(
        <>
            <CarouselCard>
                <CarouselImage src={img}/>
                <h3>{name}</h3>
                <p>{comment}</p>
            </CarouselCard>


        </>
    )
}