import React from 'react';
import image1 from '../assest/banner/uracademyTec.gif';
import image2 from '../assest/banner/uracademy.gif'
import image3 from '../assest/banner/manager.gif';

const BannerProduct = () => {
    const images = [image1, image2, image3];

    return (
        <div id="carouselExampleIndicators2" className="carousel slide my-1 text-white p-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((image, index) => (
                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : ""} aria-label={`Slide ${index + 1}`}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={image} className="d-block w-100 h-100" alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default BannerProduct;

