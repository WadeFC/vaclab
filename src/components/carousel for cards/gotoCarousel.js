import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import African from "../../assets/images/african-girl.jpg";
import Ben from "../../assets/images/man.jpg";
import WhiteGirl from "../../assets/images/white-girl.jpg";
import {CarouselLayout} from "../carousel layouts/carouselLayout";



const images = [
    {
        name: "Ada",
        src: African,
        comment: "I really love vacilabbs. The process is smooth and nice"
    },
    {
        name:"Ben",
        src:Ben,
        comment: "Its the online therapy for me. It's really amazing"
    },
    {
        name:"Sandra",
        src:WhiteGirl,
        comment: "Well, its just awesome. Nothing less."
    }

]



export default class Fade extends Component {

    render() {
        const settings = {
            arrows:false,
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "slider",
            autoplay:true,
            autoplaySpeed:1500,
            cssEase:"linear",
            nextArrow:null,
            prevArrow:null
        };
        return (
            <div>
                <Slider {...settings}>
                    {images.map((item)=>{
                        return(
                            <CarouselLayout img={item.src} name={item.name} comment={item.comment}/>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}