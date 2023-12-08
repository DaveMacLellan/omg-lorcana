import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import disneyLorcana from "../../assets/images/DisneyLorcana.png";

export default function SimpleSlider() {

    const slidesData = [
        disneyLorcana,
        disneyLorcana,
        disneyLorcana,
    ];    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Slider {...settings}>
            {slidesData.map((image, index) => (
                <div key={index} style={{width: '100%', height: '700px'}}>
                    <div
                        style={{
                        backgroundImage: `url(${disneyLorcana})`,
                        width: '100%',
                        height: '700px',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                        }} 
                    >

                    </div>
                </div>
            ))}
        </Slider>
    );
}
