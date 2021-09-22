import React from 'react';
import CardItem from './CardItem';
import'./CardBox.css';

function CardBox() {
    return (
        <div className="cards">
            <h1>Checkout These Epic Cards</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="/images/img-1.jpg"
                            text="Machine Learning"
                            label="ML"
                            path="/services"
                        />
                        <CardItem
                        src="/images/img-2.jpg"
                            text="Artificial Intelligence"
                            label="AI"
                            path="/services"
                        />
                        <CardItem
                        src="/images/img-3.jpg"
                            text="Python"
                            label="Python"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="/images/img-5.jpg"
                            text="Natural Language Processing"
                            label="NLP"
                            path="/services"
                        />
                        <CardItem
                        src="/images/img-4.jpg"
                            text="React JS"
                            label="React"
                            path="/services"
                        />
                        <CardItem
                        src="/images/img-6.jpg"
                            text="Computer Vision"
                            label="Computer Vision"
                            path="/services"
                        />
                        
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default CardBox
