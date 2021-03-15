import React from 'react'
import './Header.css'
import StarIcon from '../images/icon-star.svg'


export function Header() {
    return (
        <div className="containerHeader">
            <div className="containerLoveUsers">
                <h1>10,000+ of our users love our products.</h1>
                <p>
                    We only provide great products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.
                </p>
            </div>

            <div className="containerStars">
                <p className="p-left">
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <span>Rated 5 Stars in Reviews</span>
                </p>

                <p>
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <span>Rated 5 Stars in Report Guru </span>
                </p>

                <p className="p-right">
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <img src={StarIcon} alt="icon-star.svg" />
                    <span>Rated 5 Stars in BestTech</span>
                </p>
            </div>
        </div>
    )
}