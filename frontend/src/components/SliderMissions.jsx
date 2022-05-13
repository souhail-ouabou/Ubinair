import React from 'react'
import Slider from 'react-slick'
import bgImg from '../img/undraw_website_builder_re_ii6e (2).svg'
import imgSlid1 from '../img/Logo-les-verts-moutons.png'
import imgSlid2 from '../img/GC-research-LOGO.png'
import imgSlid3 from '../img/Logo-Little-Home-marrakech.png'
const SliderMissions = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        pauseOnHover: true,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={imgSlid1} alt="1" />
                </div>
                <div>
                    <img className='w-[175px]' src={imgSlid2} alt="1" />
                </div>
                <div>
                    <img src={imgSlid3} alt="1" />
                </div>
                <div>
                    <img src={imgSlid1} alt="1" />
                </div>
                <div>
                    <img src={imgSlid2} alt="1" />
                </div>
                <div>
                    <img src={imgSlid3} alt="1" />
                </div>
      
            </Slider>
        </div>
    )
}

export default SliderMissions
