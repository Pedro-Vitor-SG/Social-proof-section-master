import React from 'react'
import './Content.css'
import Colton from '../images/image-colton.jpg'
import Irene from '../images/image-irene.jpg'
import Anne from '../images/image-anne.jpg'

export function Content() {
    return (
        <section className="containerProfiles">
            <div className="profile profile-colton ">
                <span>
                    <img src={Colton} alt="Colton-Photograph" />
                    <p>
                        Colton Smith
                         <strong> Verified Buyer</strong>
                    </p>
                </span>


                <p>
                    "We needed the same printed design as the one we had ordered a week prior.
                    Not only did they find the original order, but we also received it in time.
                    Excellent!"
                </p>
            </div>

            <div className="profile profile-irene ">
                <span>
                    <img src={Irene} alt="Irene-Photograph" />
                    <p>
                        Irene Roberts
                    <strong>Verified Buyer</strong>
                    </p>
                </span>

                <p>
                    "Customer service is always excellent and very quick turn around. Completely
                    delighted with the simplicity of the purchase and the speed of delivery."
                </p>

            </div>

            <div className="profile profile-anne ">
                <span>
                    <img src={Anne} alt="Anne-Photograph" />
                    <p>
                        Anne Wallace
                   <strong> Verified Buyer</strong>
                    </p>
                </span>

                <p>
                    "Put an order with this company and can only praise them for the very high
                    standard. Will definitely use them again and recommend them to everyone!"
               </p>
            </div>
        </section>
    )
}