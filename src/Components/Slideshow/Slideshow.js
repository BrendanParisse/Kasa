import React, { useState } from 'react';
import data from "@/Assets/Api/logements.json";
import FlècheDroite from '@/Assets/Images/Arrow_right.png';
import FlècheGauche from '@/Assets/Images/Arrow_left.png';

const Carousel = ({ id }) => {
    const logement = data.find(item => item.id === id);
    const images = logement.pictures;
    const totalImages = images.length;
    console.log(totalImages)

    const [Image, setImage] = useState(0);

    const ImagePrécédente = () => {
        setImage((ImageSlide) => (ImageSlide === 0 ? totalImages - 1 : ImageSlide - 1));
    };

    const ImageSuivante = () => {
        setImage((ImageSlide) => (ImageSlide === totalImages - 1 ? 0 : ImageSlide + 1));
    };

    return (
        <div className="carousel">
            {
                totalImages > 1 && (
                    <>
                        <img src={FlècheGauche} onClick={ImagePrécédente} className="Flèche FlècheGauche" alt="Previous Slide" />
                        <img src={FlècheDroite} onClick={ImageSuivante} className="Flèche FlècheDroite" alt="Next Slide" />
                    </>
                )
            }
            <img src={images[Image]} className='ImgCarousel' alt={`Slide ${Image + 1} of ${totalImages}`} />
            {
                totalImages > 1 && (
                    <>
                        <div className="SlideNumber">{Image + 1}/{totalImages}</div>
                    </>
                )
            }
        </div>
    );
};

export default Carousel;